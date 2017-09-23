import React from 'react'

class Item extends React.Component {
  render() {
    const token = process.browser
      ? localStorage.getItem('gc-webshop-token')
      : null
    return (
      <div className="item">
        <style jsx={true}>{`
          .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 25px;
            margin-right: 25px;
            width: 50%;
            max-width: 600px;
            background: rgba(0, 0, 0, 0.05);
            padding: 25px;
            border-radius: 2px;
          }
          .image {
            width: 200px;
            height: 200px;
          }
        `}</style>
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.item.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="name">{this.props.item.name}</div>
        <div className="price">${this.props.item.price}</div>
        {this.props.showRating && (
          <div className="price">{this.props.item.ratingInfo.averageRating} ({this.props.item.ratingInfo.count} ratings)</div>
        )}
        {this.props.inBasket ? (
          <div
            className="button"
            onClick={() => {
              this.props.itemSelected(this.props.item.id)
            }}
          >
            Remove From Basket
          </div>
        ) : (
          token && (
            <div
              className="button"
              onClick={() => {
                this.props.itemSelected(this.props.item.id)
              }}
            >
              Add to basket
            </div>
          )
        )}
      </div>
    )
  }
}

export default Item
