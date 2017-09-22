import {gql, graphql, compose} from 'react-apollo'
import withData from '../lib/withData'
import Item from '../components/Item'


const Basket = (props) => {

  if (props.data.loading) {
    return (
      <div className='flex w-100 h-100 items-center justify-center pt7'>
        <div>
          Loading data
        </div>
      </div>
    )
  }

  if (!props.data.Basket) {
    return <div>No basket</div>
  }

  console.log(props)
  return (
    <div>
      <div>
        {props.data.Basket.items.map(item => {
          <Item key={item.id} item={item}/>
        })}
      </div>
      <div className='pointer' onClick={() => {
        const basketId = process.browser ? localStorage.getItem('gc-webshop-basket') : null
        const userId = process.browser ? localStorage.getItem('gc-webshop-userid') : null

        if (basketId && userId) {
          props.mutate({
            vairables: {
              basketId, userId
            }
          })
        }
        console.log()
      }}>Place Order</div>
    </div>
  )

}

const ITEMS_IN_BASKET = gql`
  query ItemsInBasket($basketId: ID) {
    Basket(id: $basketId) {
      items {
        id
        name
        description
        imageUrl
      }
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


const BasketContainer = compose(
  graphql(ITEMS_IN_BASKET, {
    options: {
      variables: {
        basketId: process.browser ? localStorage.getItem('gc-webshop-basket') : ""
      }
    }
  }),
  graphql(CREATE_ORDER)
)(Basket)


export default withData(BasketContainer)