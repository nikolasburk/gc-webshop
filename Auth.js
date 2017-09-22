/**
 * Created by nburk on 22.09.17.
 */
// // import history from './history'
import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'
import { gql } from 'react-apollo'
import initApollo from './lib/initApollo'

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

      this.auth0.parseHash({hash: window.location.hash}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          console.log(`Received auth result`, authResult)
          const {idToken, accessToken } = authResult
          client.mutate({
            mutation: AUTHENTICATE_USER,
            variables: {
              idToken,
              accessToken
            }
          }).then(response => {
            console.log(`Received response (authenticateAuth0User): `, response)
            localStorage.setItem('gc-webshop-token', response.data.authenticateAuth0User.token)
            client.mutate({
              mutation: CREATE_BASKET,
              variables: { userId: response.data.authenticateAuth0User.userId}
            }).then(reponse => {
              console.log(`Received response (createBasket): `, response)
              localStorage.setItem('gc-webshop-basket', response.data.createBasket.id)
              props.url.push('/')
            })
          }).catch(error => {
            console.log(`ERROR: `, error)
            props.url.push('/')
          })
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
