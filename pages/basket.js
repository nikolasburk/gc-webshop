import {gql, graphql, compose} from 'react-apollo'
import withData from '../lib/withData'
import Item from '../components/Item'
import Link from 'next/link'

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
      <h1>Your BASKET</h1>
      <div className='w-100 flex flex-wrap' style={{maxWidth: 150}}>
        {props.data.Basket.items.map(item => <div><b>{item.name}</b>: ${item.price}</div>)}
      </div>
      <Link prefetch href='/checkout'>
        Checkout
      </Link>

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
        price
      }
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
  })
)(Basket)


export default withData(BasketContainer)
/*
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
 */