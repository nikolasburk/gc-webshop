import React from 'react'
import Item from '../components/Item'
import { gql, graphql, compose } from 'react-apollo'
// import { ITEMS_IN_BASKET } from './Header'

class ItemList extends React.Component {

  render() {
    if (this.props.data.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading data
          </div>
        </div>
      )
    }

    return (
      <div className={'items'}>
        <h1>Items</h1>
        <style jsx={true}>{`
          h1 {

          }
          .items {
            margin: 25px;
          }
        `}</style>
        {this.props.data.allItems && this.props.data.allItems.map(item => (
          <Item
            key={item.id}
            item={item}
            itemSelected={this._itemSelected}
            refresh={() => this.props.data.refetch()}
            showRating={true}
          />
        ))}
        {this.props.children}
      </div>
    )
  }

  _itemSelected = async (itemId) => {

    const basketId = localStorage.getItem('gc-webshop-basket')
    if (!basketId) {
      console.log(`no basket`)
      return
    }
    await this.props.mutate({
      mutation: ADD_ITEM_TO_BASKET,
      variables: {
        itemId,
        basketId
      }
    })
    if (typeof window !== 'undefined') {
      this.props.data.refetch()
      window.location.pathname = '/'
    }

  }
}

const ALL_ITEMS = gql`query AllItems {
  allItems {
    id
    name
    price
    imageUrl
    description
    ratingInfo {
      count
      averageRating
    }
  }
}`

const ADD_ITEM_TO_BASKET = gql`
  mutation AddToItemsInBasket($itemId: ID!, $basketId: ID!) {
    addToItemsInBasket(inBasketBasketId: $basketId, itemsItemId: $itemId) {
      itemsItem {
        id
      }
    }
  }
`

export default compose(
  graphql(ALL_ITEMS, {
    options: {
      fetchPolicy: 'network-only'
    }
  }),
  graphql(ADD_ITEM_TO_BASKET)
)(ItemList)
