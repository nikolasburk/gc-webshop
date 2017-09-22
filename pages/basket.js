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
    <div className={'w-100 flex justify-center pa6'}>
      <div className='w-100 flex flex-wrap' style={{maxWidth: 150}}>
        {props.data.Basket.items.map(item => {
          <Item key={item.id} item={item} />
        })}
      </div>
      <div className='pointer' onClick={async () => {
        console.log('Place order clicked')
        const basketId = process.browser ? localStorage.getItem('gc-webshop-basket') : null
        const userId = process.browser ? localStorage.getItem('gc-webshop-userid') : null

        if (basketId && userId) {
          console.log(`Place order`, basketId, userId)
          await props.mutate({
            variables: {
              basketId, userId
            }
          })
          console.log(`Created order`)
          props.url.push('/')
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