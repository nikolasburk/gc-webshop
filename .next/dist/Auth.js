'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

        this.auth0.parseHash({ hash: window.location.hash }, function () {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(err, authResult) {
            var idToken, accessToken, authenticateUserResponse, createBasketResponse;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(authResult && authResult.accessToken && authResult.idToken)) {
                      _context.next = 17;
                      break;
                    }

                    _this.setSession(authResult);
                    console.log('Received auth result', authResult);
                    idToken = authResult.idToken, accessToken = authResult.accessToken;
                    _context.next = 6;
                    return client.mutate({
                      mutation: AUTHENTICATE_USER,
                      variables: {
                        idToken: idToken,
                        accessToken: accessToken
                      }
                    });

                  case 6:
                    authenticateUserResponse = _context.sent;

                    localStorage.setItem('gc-webshop-token', authenticateUserResponse.data.authenticateAuth0User.token);
                    localStorage.setItem('gc-webshop-userid', authenticateUserResponse.data.authenticateAuth0User.userId);

                    console.log('received authenticateUserResponse: ', authenticateUserResponse);
                    _context.next = 12;
                    return client.mutate({
                      mutation: CREATE_BASKET,
                      variables: {
                        userId: authenticateUserResponse.data.authenticateAuth0User.userId
                      }
                    });

                  case 12:
                    createBasketResponse = _context.sent;

                    localStorage.setItem('gc-webshop-basket', createBasketResponse.data.createBasket.id);
                    props.url.push('/');

                    _context.next = 18;
                    break;

                  case 17:
                    if (err) {
                      props.url.push('/');
                      console.log(err);
                      alert('Error: ' + err.error + '. Check the console for further details.');
                    }

                  case 18:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGguanMiXSwibmFtZXMiOlsiYXV0aDAiLCJBVVRIX0NPTkZJRyIsImdxbCIsImluaXRBcG9sbG8iLCJjbGllbnQiLCJBVVRIRU5USUNBVEVfVVNFUiIsIkNSRUFURV9CQVNLRVQiLCJBdXRoIiwiV2ViQXV0aCIsImRvbWFpbiIsImNsaWVudElEIiwiY2xpZW50SWQiLCJyZWRpcmVjdFVyaSIsImNhbGxiYWNrVXJsIiwiYXVkaWVuY2UiLCJyZXNwb25zZVR5cGUiLCJzY29wZSIsImxvZ2luIiwiYmluZCIsImxvZ291dCIsImhhbmRsZUF1dGhlbnRpY2F0aW9uIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aG9yaXplIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImJyb3dzZXIiLCJwYXJzZUhhc2giLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJlcnIiLCJhdXRoUmVzdWx0IiwiYWNjZXNzVG9rZW4iLCJpZFRva2VuIiwic2V0U2Vzc2lvbiIsIm11dGF0ZSIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwiYXV0aGVudGljYXRlVXNlclJlc3BvbnNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJhdXRoZW50aWNhdGVBdXRoMFVzZXIiLCJ0b2tlbiIsInVzZXJJZCIsImNyZWF0ZUJhc2tldFJlc3BvbnNlIiwiY3JlYXRlQmFza2V0IiwiaWQiLCJ1cmwiLCJwdXNoIiwiYWxlcnQiLCJlcnJvciIsImV4cGlyZXNBdCIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwicmVtb3ZlSXRlbSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0FBUFA7OztBQUdBOzs7QUFNQSxJQUFNLFNBQU4sQUFBZTs7QUFFZixJQUFNLG9CQUFBLEFBQW9CLHNCQUExQjs7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QixnQkFBZ0IsV0FBckMsQUFBZ0QsQUFDaEQ7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLFlBQVksV0FBakMsQUFBNEMsQUFDNUM7bUJBQUEsQUFBYSxRQUFiLEFBQXFCLGNBQXJCLEFBQW1DLEFBQ3BDOzs7OzZCQUVRLEFBQ1A7QUFDQTttQkFBQSxBQUFhLFdBQWIsQUFBd0IsQUFDeEI7bUJBQUEsQUFBYSxXQUFiLEFBQXdCLEFBQ3hCO21CQUFBLEFBQWEsV0FBYixBQUF3QixBQUN6Qjs7OztzQ0FFaUIsQUFDaEI7QUFDQTtBQUNBO1VBQUksWUFBWSxLQUFBLEFBQUssTUFBTSxhQUFBLEFBQWEsUUFBeEMsQUFBZ0IsQUFBVyxBQUFxQixBQUNoRDthQUFPLElBQUEsQUFBSSxPQUFKLEFBQVcsWUFBbEIsQUFBOEIsQUFDL0I7Ozs7Ozs7a0JBakZrQixBIiwiZmlsZSI6IkF1dGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L2djLXdlYnNob3AifQ==