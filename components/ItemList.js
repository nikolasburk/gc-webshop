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
      <div className={'w-100 flex justify-center pa6'}>
        <div className='w-100 flex flex-wrap' style={{maxWidth: 150}}>
          {this.props.data.allItems && this.props.data.allItems.map(item => (
            <Item
              key={item.id}
              item={item}
              itemSelected={this._itemSelected}
              refresh={() => this.props.data.refetch()}
            />
          ))}
        </div>
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
      },
      // update: (store, response) => {
      //   console.log(`update store`, store, response)
      //   const data = store.readQuery({
      //     query: ITEMS_IN_BASKET
      //   })
      //   console.log(`Current data: `, data)
      //   data._allItemsMeta.count++
      //   store.writeQuery({
      //     query: ITEMS_IN_BASKET,
      //     data
      //   })
      // }
    })
    this.props.data.refetch()

  }
}

const ALL_ITEMS = gql`query AllItems {
  allItems {
    id
    name
    price
    imageUrl
    description
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
