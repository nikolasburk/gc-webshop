import auth0 from 'auth0-js'
import { gql } from 'react-apollo'
import initApollo from './initApollo'

const AUTH_CONFIG = {
  domain: 'nikolasburk.eu.auth0.com',
  clientId: 'wb3aqPafncac8aZYlGPuIgxO51auo2rR',
  callbackUrl: 'http://localhost:3000/callback'
}

const client = initApollo()

const AUTHENTICATE_USER = gql`
  mutation AuthenticateAuth0User($idToken: String!, $accessToken: String!) {
    authenticateAuth0User(idToken: $idToken, accessToken: $accessToken) {
      userId
      token
    }
  }
`

const CREATE_BASKET = gql`
  mutation CreateBasket($userId: ID!) {
    createBasket(userId: $userId) {
      id
    }
  }
`

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid'
  })

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login() {
    this.auth0.authorize()
  }

   handleAuthentication(props) {
    console.log(`Auth - handleAuthentication`)

    if (process.browser) {

      this.auth0.parseHash({hash: window.location.hash}, async (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          console.log(`Received auth result`, authResult)
          const {idToken, accessToken } = authResult
          const authenticateUserResponse = await client.mutate({
            mutation: AUTHENTICATE_USER,
            variables: {
              idToken,
              accessToken
            }
          })
          localStorage.setItem('gc-webshop-token', authenticateUserResponse.data.authenticateAuth0User.token)
          localStorage.setItem('gc-webshop-userid', authenticateUserResponse.data.authenticateAuth0User.userId)

          console.log(`received authenticateUserResponse: `, authenticateUserResponse)
          const createBasketResponse = await client.mutate({
            mutation: CREATE_BASKET,
            variables: {
              userId: authenticateUserResponse.data.authenticateAuth0User.userId
            }
          })
          localStorage.setItem('gc-webshop-basket', createBasketResponse.data.createBasket.id)
          location.pathname = '/'

        } else if (err) {
          props.url.push('/')
          console.log(err)
          alert(`Error: ${err.error}. Check the console for further details.`)
        }
      })
    }

  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

}
