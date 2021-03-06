const { request } = require('graphql-request')

const query = `mutation {
  iPhone: createItem(
    name: "iPhone X"
    description: "The new iPhone"
    price: 1300
    imageUrl: "https://icdn2.digitaltrends.com/image/iphone-x-press-220x220.jpg"
    ratingInfo: {
      averageRating: 5
      count: 10
    }
  ) {
    id
  }
  
  ive: createItem(
    name: "John Ive X"
    description: "New generation of haircuts"
    price: 1300
    imageUrl: "https://pbs.twimg.com/media/DKQQVvUXoAAd6Es.jpg"
    ratingInfo: {
      averageRating: 9001
      count: 100
    }
  ) {
    id
  }
  
  macbook: createItem(
    name: "Macbook 2016"
    description: "The not very latest, but still pretty awesome Macbook"
    price: 2300
    imageUrl: "http://17c4dcd7f91259d8cc66-f5932f6db0039e8c02f89a70c334ff0e.r2.cf1.rackcdn.com/wp-content/uploads/sites/2/MacBook.jpg"
    ratingInfo: {
      averageRating: 4.5
      count: 9
    }
  ) {
    id
  }
  
  ipad: createItem(
    name: "iPad Pro"
    description: "If you have too much money, buy this"
    price: 2100
    imageUrl: "http://thewirecutter.com/wp-content/uploads/2017/04/ipad-lowres-9460.jpg"
    ratingInfo: {
      averageRating: 4
      count: 9
    }
  ) {
    id
  }
  
  house: createItem(
    name: "A House"
    description: "Why not just buy a proper house?"
    price: 910000
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pyramid_of_Khafre_Giza_Egypt_in_2015_2.jpg/460px-Pyramid_of_Khafre_Giza_Egypt_in_2015_2.jpg"
    ratingInfo: {
      averageRating: 4
      count: 1
    }
  ) {
    id
  } 
}`

request(process.env.GRAPHCOOL_ENDPOINT, query).catch(console.error.bind(console))
