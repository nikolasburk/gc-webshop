'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _auth0Js = require('auth0-js');

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _auth0Variables = require('./auth0-variables');

var _reactApollo = require('react-apollo');

var _initApollo = require('./lib/initApollo');

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation AuthenticateAuth0User($idToken: String!, $accessToken: String!) {\n    authenticateAuth0User(idToken: $idToken, accessToken: $accessToken) {\n      userId\n      token\n    }\n  }\n'], ['\n  mutation AuthenticateAuth0User($idToken: String!, $accessToken: String!) {\n    authenticateAuth0User(idToken: $idToken, accessToken: $accessToken) {\n      userId\n      token\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  mutation CreateBasket($userId: ID!) {\n    createBasket(userId: $userId) {\n      id\n    }\n  }\n'], ['\n  mutation CreateBasket($userId: ID!) {\n    createBasket(userId: $userId) {\n      id\n    }\n  }\n']);

/**
 * Created by nburk on 22.09.17.
 */
// // import history from './history'


var client = (0, _initApollo2.default)();

var AUTHENTICATE_USER = (0, _reactApollo.gql)(_templateObject);

var CREATE_BASKET = (0, _reactApollo.gql)(_templateObject2);

var Auth = function () {
  function Auth() {
    (0, _classCallCheck3.default)(this, Auth);

    this.auth0 = new _auth0Js2.default.WebAuth({
      domain: _auth0Variables.AUTH_CONFIG.domain,
      clientID: _auth0Variables.AUTH_CONFIG.clientId,
      redirectUri: _auth0Variables.AUTH_CONFIG.callbackUrl,
      audience: 'https://' + _auth0Variables.AUTH_CONFIG.domain + '/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  (0, _createClass3.default)(Auth, [{
    key: 'login',
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: 'handleAuthentication',
    value: function handleAuthentication(props) {
      var _this = this;

      console.log('Auth - handleAuthentication');

      if (process.browser) {

        this.auth0.parseHash({ hash: window.location.hash }, function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);
            console.log('Received auth result', authResult);
            var idToken = authResult.idToken,
                accessToken = authResult.accessToken;

            client.mutate({
              mutation: AUTHENTICATE_USER,
              variables: {
                idToken: idToken,
                accessToken: accessToken
              }
            }).then(function (response) {
              console.log('Received response (authenticateAuth0User): ', response);
              localStorage.setItem('gc-webshop-token', response.data.authenticateAuth0User.token);
              client.mutate({
                mutation: CREATE_BASKET,
                variables: { userId: response.data.authenticateAuth0User.userId }
              }).then(function (reponse) {
                console.log('Received response (createBasket): ', response);
                localStorage.setItem('gc-webshop-basket', response.data.createBasket.id);
                props.url.push('/');
              });
            }).catch(function (error) {
              console.log('ERROR: ', error);
              props.url.push('/');
            });
          } else if (err) {
            props.url.push('/');
            console.log(err);
            alert('Error: ' + err.error + '. Check the console for further details.');
          }
        });
      }
    }
  }, {
    key: 'setSession',
    value: function setSession(authResult) {
      // Set the time that the access token will expire at
      var expiresAt = (0, _stringify2.default)(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }
  }, {
    key: 'logout',
    value: function logout() {
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  }]);

  return Auth;
}();

exports.default = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGguanMiXSwibmFtZXMiOlsiYXV0aDAiLCJBVVRIX0NPTkZJRyIsImdxbCIsImluaXRBcG9sbG8iLCJjbGllbnQiLCJBVVRIRU5USUNBVEVfVVNFUiIsIkNSRUFURV9CQVNLRVQiLCJBdXRoIiwiV2ViQXV0aCIsImRvbWFpbiIsImNsaWVudElEIiwiY2xpZW50SWQiLCJyZWRpcmVjdFVyaSIsImNhbGxiYWNrVXJsIiwiYXVkaWVuY2UiLCJyZXNwb25zZVR5cGUiLCJzY29wZSIsImxvZ2luIiwiYmluZCIsImxvZ291dCIsImhhbmRsZUF1dGhlbnRpY2F0aW9uIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aG9yaXplIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImJyb3dzZXIiLCJwYXJzZUhhc2giLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJlcnIiLCJhdXRoUmVzdWx0IiwiYWNjZXNzVG9rZW4iLCJpZFRva2VuIiwic2V0U2Vzc2lvbiIsIm11dGF0ZSIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwidGhlbiIsInJlc3BvbnNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJhdXRoZW50aWNhdGVBdXRoMFVzZXIiLCJ0b2tlbiIsInVzZXJJZCIsImNyZWF0ZUJhc2tldCIsImlkIiwidXJsIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCIsImV4cGlyZXNBdCIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwicmVtb3ZlSXRlbSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztBQVBQOzs7QUFHQTs7O0FBTUEsSUFBTSxTQUFOLEFBQWU7O0FBRWYsSUFBTSxvQkFBQSxBQUFvQixzQkFBMUI7O0FBU0EsSUFBTSxnQkFBQSxBQUFnQixzQkFBdEI7O0lBUXFCLEEsbUJBVW5CO2tCQUFjO3dDQUFBOztTQVRkLEFBU2MsWUFURixrQkFBSixBQUFVO2NBQ1IsNEJBRGdCLEFBQ0osQUFDcEI7Z0JBQVUsNEJBRmMsQUFFRixBQUN0QjttQkFBYSw0QkFIVyxBQUdDLEFBQ3pCOzZCQUFxQiw0QkFBckIsQUFBaUMsU0FKVCxBQUt4QjtvQkFMd0IsQUFLVixBQUNkO2FBTk0sQUFBa0IsQUFNakIsQUFHSyxBQUNaO0FBVndCLEFBQ3hCLEtBRE07O1NBVU4sQUFBSyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBeEIsQUFBYSxBQUFnQixBQUM3QjtTQUFBLEFBQUssU0FBUyxLQUFBLEFBQUssT0FBTCxBQUFZLEtBQTFCLEFBQWMsQUFBaUIsQUFDL0I7U0FBQSxBQUFLLHVCQUF1QixLQUFBLEFBQUsscUJBQUwsQUFBMEIsS0FBdEQsQUFBNEIsQUFBK0IsQUFDM0Q7U0FBQSxBQUFLLGtCQUFrQixLQUFBLEFBQUssZ0JBQUwsQUFBcUIsS0FBNUMsQUFBdUIsQUFBMEIsQUFDbEQ7Ozs7OzRCQUVPLEFBQ047V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7O3lDLEFBRW9CLE9BQU87a0JBQzFCOztjQUFBLEFBQVEsSUFFUjs7VUFBSSxRQUFKLEFBQVksU0FBUyxBQUVuQjs7YUFBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLEVBQUMsTUFBTSxPQUFBLEFBQU8sU0FBbkMsQUFBcUIsQUFBdUIsUUFBTyxVQUFBLEFBQUMsS0FBRCxBQUFNLFlBQWUsQUFDdEU7Y0FBSSxjQUFjLFdBQWQsQUFBeUIsZUFBZSxXQUE1QyxBQUF1RCxTQUFTLEFBQzlEO2tCQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjtvQkFBQSxBQUFRLDRCQUZzRCxBQUU5RCxBQUFvQztnQkFGMEIsQUFHdkQsVUFIdUQsQUFHOUIsV0FIOEIsQUFHdkQ7Z0JBSHVELEFBRzlDLGNBSDhDLEFBRzlCLFdBSDhCLEFBRzlDLEFBQ2hCOzttQkFBQSxBQUFPO3dCQUFPLEFBQ0YsQUFDVjs7eUJBQVcsQUFFVDs2QkFKSixBQUFjLEFBRUQ7QUFBQSxBQUNUO0FBSFUsQUFDWixlQURGLEFBTUcsS0FBSyxvQkFBWSxBQUNsQjtzQkFBQSxBQUFRLG1EQUFSLEFBQTJELEFBQzNEOzJCQUFBLEFBQWEsUUFBYixBQUFxQixvQkFBb0IsU0FBQSxBQUFTLEtBQVQsQUFBYyxzQkFBdkQsQUFBNkUsQUFDN0U7cUJBQUEsQUFBTzswQkFBTyxBQUNGLEFBQ1Y7MkJBQVcsRUFBRSxRQUFRLFNBQUEsQUFBUyxLQUFULEFBQWMsc0JBRnJDLEFBQWMsQUFFRCxBQUE4QztBQUY3QyxBQUNaLGlCQURGLEFBR0csS0FBSyxtQkFBVyxBQUNqQjt3QkFBQSxBQUFRLDBDQUFSLEFBQWtELEFBQ2xEOzZCQUFBLEFBQWEsUUFBYixBQUFxQixxQkFBcUIsU0FBQSxBQUFTLEtBQVQsQUFBYyxhQUF4RCxBQUFxRSxBQUNyRTtzQkFBQSxBQUFNLElBQU4sQUFBVSxLQUFWLEFBQWUsQUFDaEI7QUFQRCxBQVFEO0FBakJELGVBQUEsQUFpQkcsTUFBTSxpQkFBUyxBQUNoQjtzQkFBQSxBQUFRLGVBQVIsQUFBdUIsQUFDdkI7b0JBQUEsQUFBTSxJQUFOLEFBQVUsS0FBVixBQUFlLEFBQ2hCO0FBcEJELEFBcUJEO0FBekJELGlCQXlCTyxJQUFBLEFBQUksS0FBSyxBQUNaO2tCQUFBLEFBQU0sSUFBTixBQUFVLEtBQVYsQUFBZSxBQUNqQjtvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzhCQUFnQixJQUFoQixBQUFvQixRQUNyQjtBQUNGO0FBL0JELEFBZ0NEO0FBRUY7Ozs7K0JBRVUsQSxZQUFZLEFBQ3JCO0FBQ0E7VUFBSSxZQUFZLHlCQUFnQixXQUFBLEFBQVcsWUFBWixBQUF3QixPQUFRLElBQUEsQUFBSSxPQUFuRSxBQUFnQixBQUErQyxBQUFXLEFBQzFFO21CQUFBLEFBQWEsUUFBYixBQUFxQixnQkFBZ0IsV0FBckMsQUFBZ0QsQUFDaEQ7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLFlBQVksV0FBakMsQUFBNEMsQUFDNUM7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLGNBQXJCLEFBQW1DLEFBQ3BDOzs7OzZCQUVRLEFBQ1A7QUFDQTttQkFBQSxBQUFhLFdBQWIsQUFBd0IsQUFDeEI7bUJBQUEsQUFBYSxXQUFiLEFBQXdCLEFBQ3hCO21CQUFBLEFBQWEsV0FBYixBQUF3QixBQUV6Qjs7OztzQ0FFaUIsQUFDaEI7QUFDQTtBQUNBO1VBQUksWUFBWSxLQUFBLEFBQUssTUFBTSxhQUFBLEFBQWEsUUFBeEMsQUFBZ0IsQUFBVyxBQUFxQixBQUNoRDthQUFPLElBQUEsQUFBSSxPQUFKLEFBQVcsWUFBbEIsQUFBOEIsQUFDL0I7Ozs7Ozs7a0JBbkZrQixBIiwiZmlsZSI6IkF1dGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L3dpdGgtYXBvbGxvIn0=