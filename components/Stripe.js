// React
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
// GraphQL
import { graphql, compose, gql } from 'react-apollo'

class Stripe extends React.Component {

  constructor(props) {
    super(props)
    this.state = { success: false }
    this.onToken = this.onToken.bind(this)
  }


  async onToken(token) {
    const stripeToken = token.id
    // Get user id
    const userId = this.props.data.Auth0User.id
    const basketId = process.browser ? localStorage.getItem('gc-webshop-basket') : null

    if (userId && basketId) {
      const createOrderResult = await this.props.createOrder({ variables: { userId, basketId } })
      const paymentResult = await this.props.pay({ variables: { orderId: createOrderResult.data.createOrder.id, stripeToken} })
      console.log(`result: `, paymentResult)
      if (paymentResult.data.pay.success) {
        this.props.url.push('/success')
      } else {
        console.log(`ERROR`)
      }

    } else {
      console.log(`No user or basket`)
    }

  }

  render() {

    if (this.props.data.loading || this.props.data.Auth0User === null) {
      return <div>Loading</div>
    }

    const amount = this.props.itemsInBasket ?
      this.props.itemsInBasket.Basket.items.reduce((acc, curr) => acc + curr.price, 0) : 0

    return (
      <div>
        <div>
          <div>Items:</div>
          {this.props.itemsInBasket && this.props.itemsInBasket.Basket &&
          this.renderItems(this.props.itemsInBasket.Basket.items)
          }
          <b>SUM: ${amount}</b>
        </div>
        <StripeCheckout
          name="My Demo App"
          description="It’s super duper awesome."
          ComponentClass="div"
          panelLabel="Amount"
          amount={amount * 100}
          currency="USD"
          stripeKey="pk_test_e8KuPYHUCxyz68Vk3fHBCrVw"
          email={this.props.data.Auth0User.email}
          shippingAddress={false}
          billingAddress={true}
          zipCode={true}
          bitcoin
          allowRememberMe
          token={this.onToken}
          reconfigureOnUpdate={false}
          triggerEvent="onClick"
        >
          <div style={{background: 'rgba(0,0,0,.1)', borderRadius: 2, padding: '2px 6px', display: 'inline-block', cursor: 'pointer', fontSize: 16}}>Go for it!</div>
        </StripeCheckout>
      </div>
    )
  }

  renderItems(items) {
    console.log('items', items)
    return items.map(item => <div><b>{item.name}</b>: ${item.price}</div>)
  }
}

const user = gql`
  query UserQuer($userId: ID!) {
    Auth0User(id: $userId) {
      id
      email
    }
  }
`

const CREATE_ORDER = gql`
  mutation CreateOrder($basketId: ID!, $userId: ID!) {
    createOrder(basketId: $basketId, userId: $userId) {
      id
    }
  }
`

const PAY = gql`
  mutation Pay($orderId: String!, $stripeToken: String!) {
    pay(orderId: $orderId, stripeToken: $stripeToken) {
      success
    }
  }
`


const ITEMS_IN_BASKET = gql`
  query ItemsInBasket($basketId: ID) {
    Basket(id: $basketId) {
      id
      items {
        id
        name
        description
        imageUrl
        price
      }
    }
  }
`

export default compose(
  graphql(user, {
    options: {
      variables: {
        userId: process.browser ? localStorage.getItem('gc-webshop-userid') : ""
      }
    }
  }),
  graphql(CREATE_ORDER, { name: 'createOrder'}),
  graphql(PAY, { name: 'pay'}),
  graphql(ITEMS_IN_BASKET,
    { name: 'itemsInBasket', options: {
      variables: {
        basketId: process.browser ? localStorage.getItem('gc-webshop-basket') : ""
      }
    }}
  )
)(Stripe)
