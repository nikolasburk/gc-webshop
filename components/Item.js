import React from 'react'

class Item extends React.Component {

  render() {
    return (
      <div
        className='bg-white ma3 box post flex flex-column no-underline br2'
      >
        <div
          className='image'
          style={{
            backgroundImage: `url(${this.props.item.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingBottom: '100%',
          }}
        />
        <div className='flex items-center black-80 fw3 description'>
          {this.props.item.name}
        </div>
        <div onClick={() => {
          this.props.itemSelected(this.props.item.id)
        }}>Add to basket</div>
      </div>
    )
  }

}

export default Item