const stripe = require('stripe')(process.env.STRIPE_KEY)
const { fromEvent } = require('graphcool-lib')
const { json } = require('micro')

module.exports = async (req, res) => {
  const {event} = await json(req)
  const client = fromEvent(event)
  const api = client.api('simple/v1')

  const getOrder = orderId => {
    return api.request(
      `query getOrder($orderId: ID!) {
      Order(id: $orderId) {
        id
        orderedAt
        basket {
          items {
            id
            price
          }
        }
        user {
          id
          email
          name
          familyName
          stripeCustomerId
        }
      }
    }`,
      { orderId },
    )
  }

  const createStripeCustomer = (user, stripeToken) => {
    const { email, name } = user
    console.log(`Creating stripe customer for ${email}`)
    return new Promise((resolve, reject) => {
      const input = {
        email,
        description: name,
        source: stripeToken,
      }
      console.log('trying to create stripe customer', input)
      stripe.customers.create(
        input,
        (err, customer) => {
          if (err) {
            console.log(
              `Error creating stripe customer: ${JSON.stringify(err)}`,
            )
            reject(err)
          } else {
            console.log(`Successfully created stripe customer: ${customer.id}`)
            resolve(customer.id)
          }
        },
      )
    })
  }

  const createStripeCharge = (email, stripeCustomerId, amount, description) => {
    console.log(`Creating stripe charge for ${email}`)
    return new Promise((resolve, reject) => {
      stripeCharge = stripe.charges.create(
        {
          amount,
          description,
          currency: 'usd',
          customer: stripeCustomerId,
        },
        (err, charge) => {
          if (err) {
            console.log(`Error creating Stripe charge: ${JSON.stringify(err)}`)
            reject(err)
          } else {
            console.log(`Successfully created Stripe charge: ${charge.id}`)
            console.log(
              `${charge.amount / 100} ${charge.currency} have been charged`,
            )
            console.log(`Charge description:`)
            console.log(charge.description)
            resolve(stripeCustomerId)
          }
        },
      )
    })
  }

  const updateUserAndOrder = (userId, stripeCustomerId, orderId) => {
    return api.request(
      `
      mutation update(
        $userId: ID!
        $orderId: ID!
        $stripeCustomerId: String
        $orderedAt: DateTime
      ) {
        updateAuth0User(
          id: $userId,
          stripeCustomerId: $stripeCustomerId,
        ) {
          id
          email
        }
        updateOrder(
          id: $orderId,
          orderedAt: $orderedAt
        ) {
          id
        }
      }
    `,
      {
        userId,
        stripeCustomerId,
        orderId,
        orderedAt: new Date().toISOString(),
      },
    )
  }
  const {stripeToken, orderId} = event.data

  const { Order } = await getOrder(orderId)

  if (!Order) {
    throw new Error(`Invalid orderId ${event.data.orderId}`)
  }

  const { user } = Order

  const amount = calcAmount(Order)
  const description = getDescription(Order)

  if (Order.orderedAt) {
    throw new Error(
      `Order ${Order.id} has already been payed on the ${Order.orderedAt}`,
    )
  }

  const stripeCustomerId = user.stripeCustomerId || await createStripeCustomer(user, stripeToken)

  await createStripeCharge(user.email, stripeCustomerId, amount, description)
  await updateUserAndOrder(user.id, stripeCustomerId, Order.id)

  return {
    data: {
      success: true,
    },
  }
}

function calcAmount(order) {
  return order.basket.items.reduce((acc, item) => acc + item.price, 0) * 100
}

function getDescription(order) {
  const list = order.basket.items
    .map(item => {
      return `${item.name}: $${item.price}`
    })
    .join(', ')

  return `You ordered these items: ${list}. Thanks for your order!`
}
