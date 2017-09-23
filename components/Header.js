import Link from 'next/link'
import { gql, graphql } from 'react-apollo'

const header = ({ pathname, login, data }) => {
  const token = process.browser
    ? localStorage.getItem('gc-webshop-token')
    : null
  const itemCount =
    !data.loading && data.Basket && data.Basket._itemsMeta
      ? data.Basket._itemsMeta.count
      : 0

  return (
    <header>
      <style jsx>{`
        header {
          margin-bottom: 25px;
          background: rgba(0, 0, 0, 0.05);
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
        h1 {
          font-size: 20px;
          margin-top: 16px;
          margin-left: 16px;
          color: rgba(0, 0, 0, 0.8);
          cursor: pointer;
        }
        .right {
          display: flex;
        }
      `}</style>
      <Link prefetch href="/">
        <h1>Graphcool Webshop</h1>
      </Link>
      <div className="right">
        {!token ? (
          <div
            onClick={() => {
              login()
            }}
          >
            Login
          </div>
        ) : (
          <div
            onClick={() => {
              if (process.browser) {
                localStorage.clear()
                location.reload()
              }
            }}
          >
            Logout
          </div>
        )}
        {token && (
          <Link prefetch href="/checkout">
            <a className={pathname === '/' && 'is-active'}>
              {itemCount} items in basket
            </a>
          </Link>
        )}
      </div>
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
      basketId: process.browser
        ? localStorage.getItem('gc-webshop-basket')
        : '',
    },
  },
})(header)
