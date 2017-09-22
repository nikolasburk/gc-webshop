const fromEvent = require('graphcool-lib').fromEvent
const jwtDecode = require('jwt-decode')

const AUTH0_DOMAIN = 'nikolasburk.eu.auth0.com'
const AUTH0_CLIENT_ID = 'wb3aqPafncac8aZYlGPuIgxO51auo2rR'
const API_TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1ERTBNVUZETURrNE56RTRNalE0TlVVeE9UaEZPVEU1TUVGQ1JUZzNPVVl4TlVWQlFqSTFNQSJ9.eyJpc3MiOiJodHRwczovL25pa29sYXNidXJrLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJ6WkExczNBcmlaM0VSaU5wODE0Mzd5cXlOMW9taXNkekBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9uaWtvbGFzYnVyay5ldS5hdXRoMC5jb20vYXBpL3YyLyIsImV4cCI6MTUwNjIwNDkzOSwiaWF0IjoxNTA2MTE4NTM5LCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiJ9.eyCRa8q47pphhg4-nhNXU1GvzbwJcWvZAHEla8Y01oeVHmGupfHxMz9JwHxDsssfMwHmG5qJC82oh0nvWdri8H3JDywPkB3OFmephuB5C_23I1efRLZI-o6ixLzIlSUbnoEruWjC2PyNbADEknA9sXOdMsr-8vLjrOSIj0KJICZGSx-nFfRTs46OkllNivW0JS-t2rEhEtHOL6RfcNmlxdpeSrqy22hbt5gG3Ki1bgDYKoA-WQUlElm9B66fRT30iFOEYhPSt_GyseQ7N3DMk1e-Qg8mKqfpHhI0weMBW6JC-lsS-GssSSLb4nyF_CeTT0RAOfohdN8fJOD8VJVrEw`\


const fetchAuth0UserProfile = auth0AccessToken => {
  const profileUrl = `https://${AUTH0_DOMAIN}/userinfo?access_token=${auth0AccessToken}`

  console.log(`Fetch from url: ${profileUrl}`)
  return fetch(profileUrl) //.then(response => response.json())
    .then(response => {
      console.log(`Response from auth0: ${JSON.stringify(response)}`)
      return response.json()
    })
    .then(json => {
      const url = `https://${${AUTH0_DOMAIN}}/api/v2/users/${json.sub}`
      return fetch(url)
        .then(response => response.json())
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
      // const sub = graphcoolUser.sub

      return api.request(`
        mutation {
          createAuth0User(
            auth0UserId:"${graphcoolUser.user_id}"
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


