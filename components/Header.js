import Link from 'next/link'
import {gql, graphql} from 'react-apollo'

const header = ({ pathname, login, data }) => {

  const token = process.browser ? localStorage.getItem('gc-webshop-token') : null
  const itemCount = (!data.loading && data.Basket && data.Basket._itemsMeta) ? data.Basket._itemsMeta.count : 0

  return (
    <header>
      <Link prefetch href='/'>
        <a className={pathname === '/' && 'is-active'}>Home</a>
      </Link>
      {!token ? (
          <div className='ml1 black pointer' onClick={() => {
            login()
          }}>login</div>)
        : (
          <div className='ml1 no-underline black pointer' onClick={() => {
            if (process.browser) {
              localStorage.clear()
              location.reload()
            }
          }}>logout</div>)
      }
      {token &&
      <Link prefetch href='/basket'>
        <a className={pathname === '/' && 'is-active'}>{itemCount} items in basket</a>
      </Link>
      }
      <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
    </header>
  )

}

export const ITEMS_IN_BASKET = gql`
  query ItemsInBasket($basketId: ID) {
    Basket(id: $basketId) {
      _itemsMeta {
        count
      }
    }
  }
`

export default graphql(ITEMS_IN_BASKET, {
  options: {
    variables: {
      basketId: process.browser ? localStorage.getItem('gc-webshop-basket') : ""
    }
  }
})(header)


