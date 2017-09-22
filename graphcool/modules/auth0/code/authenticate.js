const fromEvent = require('graphcool-lib').fromEvent
const jwtDecode = require('jwt-decode')

const AUTH0_DOMAIN = 'nikolasburk.eu.auth0.com'
const AUTH0_CLIENT_ID = 'wb3aqPafncac8aZYlGPuIgxO51auo2rR'

const fetchAuth0UserProfile = auth0AccessToken => {
  const profileUrl = `https://${AUTH0_DOMAIN}/userinfo?access_token=${auth0AccessToken}`

  console.log(`Fetch from url: ${profileUrl}`)
  return fetch(profileUrl) //.then(response => response.json())
    .then(response => {
      console.log(`Response from auth0: ${JSON.stringify(response)}`)
      return response.json()
    })
}

const getGraphcoolUser = (auth0UserId, api) => {
  return api.request(`
      query {
        Auth0User(auth0UserId: "${auth0UserId}"){
          id
        }
      }`
    ).then(userQueryResult => {
      if (userQueryResult.error) {
        return Promise.reject(userQueryResult.error)
      } else {
        return userQueryResult.Auth0User
      }
    }
  )
}

const createGraphcoolUser = (auth0AccessToken, api) => {
  console.log(`Fetch auth0 profile...`)
  return fetchAuth0UserProfile(auth0AccessToken)
    .then(auth0User => {

      console.log(`Received auth0 user: ${JSON.stringify(auth0User)}`)
      const graphcoolUser = Object.assign({
        family_name: '',
        given_name: '',
      }, auth0User)

      console.log(`Create Graphcool user with data: ${JSON.stringify(graphcoolUser)}`)

      // https://auth0.com/docs/api/authentication#get-user-info
      const sub = graphcoolUser.sub

      return api.request(`
        mutation {
          createAuth0User(
            auth0UserId:"${sub}"
            name: "${graphcoolUser.name}"
            familyName: "${graphcoolUser.family_name}"
            givenName: "${graphcoolUser.given_name}"
            picture: "${graphcoolUser.picture}"
            email: "${graphcoolUser.email}"
            emailVerified: false
          ){
            id
          }
        }`)
        .then(userMutationResult => {
          console.log(`Mutation result: ${JSON.stringify(userMutationResult)}`)
          return userMutationResult.createAuth0User.id
        })
    }).catch(error => {
      console.log(`An error occured while fetching auth0 data: ${JSON.stringify(error)}`)
      Promise.reject({error: `An error occured: ${JSON.stringify(error)}`})
    })
}

const getOrCreateGraphcoolUser = (auth0UserId, auth0AccessToken, api) => {
  return getGraphcoolUser(auth0UserId, api)
    .then(graphcoolUser => {
      if (!graphcoolUser) {
        console.log('Create Graphcool user...')
        return createGraphcoolUser(auth0AccessToken, api)
      } else {
        console.log(`Graphcool user id: ${JSON.stringify(graphcoolUser)}`)
        return graphcoolUser.id
      }
    })
}


module.exports = event => {

  console.log(`Received authentication request with event: ${JSON.stringify(event)}`)

  // const = tokenIssuer = `https://${AUTH0_DOMAIN}/`

  // Validate jwt (idToken) and return error if invalid
  // WARNING: This code does not validate the token but only decodes it ¯\_(ツ)_/¯
  // https://github.com/auth0/jwt-decode
  const decodedToken = jwtDecode(event.data.idToken)
  console.log(`Decoded idToken: ${JSON.stringify(decodedToken)}`)
  const auth0UserId = decodedToken.sub

  const graphcool = fromEvent(event)
  const api = graphcool.api('simple/v1')

  const auth0AccessToken = event.data.accessToken

  return getOrCreateGraphcoolUser(auth0UserId, auth0AccessToken, api)
    .then(userId => {
      console.log(`Graphcool user: ${userId}`)
      return graphcool.generateAuthToken(userId, 'Auth0User')
        .then(token => {
          console.log(`Return token: ${token}`)
          console.log(`Return userId: ${userId}`)
          return { data: { token, userId } }
        })
    })
    .catch(error => { 
      console.log(`Error: ${JSON.stringify(error)}`)

      // don't expose error message to client!
      return { error: 'An unexpected error occured' }
    })
}


