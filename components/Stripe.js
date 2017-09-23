// React
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
// GraphQL
import { graphql, compose, gql } from 'react-apollo'
import Item from './Item'
import {auth} from '../pages/index'
import Header from './Header'
import App from './App'

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
      <App>
        <Header login={auth.login} pathname={this.props.url.pathname} />
        <div className="cart">
          <style jsx={true}>{`
            .cart {
              margin-left: 25px;
            }
            .sum {
              padding: 16px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              max-width: 500px;
              margin-bottom: 25px;
            }
          `}</style>
          <div>
            <h1>Shopping Cart</h1>
            {this.props.itemsInBasket && this.props.itemsInBasket.Basket &&
            this.renderItems(this.props.itemsInBasket.Basket.items)
            }
          </div>
          <StripeCheckout
            name="Graphcool Webshop"
            description="It’s super duper awesome."
            ComponentClass="div"
            panelLabel="Amount"
            amount={amount * 100}
            currency="USD"
            stripeKey="pk_test_e8KuPYHUCxyz68Vk3fHBCrVw"
            email={this.props.data.Auth0User.email}
            shippingAddress={false}
            billingAddress={false}
            zipCode={false}
            bitcoin
            allowRememberMe
            token={this.onToken}
            reconfigureOnUpdate={false}
            triggerEvent="onClick"
          >
            <div className="sum">
              <b>SUM: ${amount}</b>
              <div className="button">Checkout</div>
            </div>
          </StripeCheckout>
        </div>
      </App>
    )
  }

  renderItems(items) {
    console.log('items', items)
    return items.map(item => <Item key={item.id} inBasket={true} item={item} />)
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
