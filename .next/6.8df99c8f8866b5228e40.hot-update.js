webpackHotUpdate(6,{

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(601);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _taggedTemplateLiteral2 = __webpack_require__(700);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _auth0Js = __webpack_require__(707);

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _auth0Variables = __webpack_require__(744);

var _reactApollo = __webpack_require__(588);

var _initApollo = __webpack_require__(626);

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation AuthenticateAuth0User($idToken: String!, $accessToken: String!) {\n    authenticateAuth0User(idToken: $idToken, accessToken: $accessToken) {\n      token\n    }\n  }\n'], ['\n  mutation AuthenticateAuth0User($idToken: String!, $accessToken: String!) {\n    authenticateAuth0User(idToken: $idToken, accessToken: $accessToken) {\n      token\n    }\n  }\n']);

/**
 * Created by nburk on 22.09.17.
 */
// // import history from './history'


var client = (0, _initApollo2.default)();

var AUTHENTICATE_USER = (0, _reactApollo.gql)(_templateObject);

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
      if (typeof window !== 'undefined') {
        __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"the-lib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      }
      this.auth0.parseHash({ hash: window.location.hash }, function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this.setSession(authResult);
          console.log('Received auth result', authResult);
          console.log(client);
          // // history.replace('/home')
          var accessToken = authResult.accessToken,
              idToken = authResult.idToken;

          client.mutate({
            mutation: AUTHENTICATE_USER,
            variables: {
              idToken: idToken,
              accessToken: accessToken
            }
          }).then(function (response) {
            console.log('Received response: ', response);
            localStorage.setItem('gc-webshop-token', response.data.authenticateAuth0User.token);
            // history.replace('/')
            props.url.push('/');
          }).catch(function (error) {
            console.log('ERROR: ', error);
            // history.replace('/')
          });
        } else if (err) {
          // history.replace('/')
          console.log(err);
          alert('Error: ' + err.error + '. Check the console for further details.');
        }
      });
    }
  }, {
    key: 'setSession',
    value: function setSession(authResult) {
      // Set the time that the access token will expire at
      var expiresAt = (0, _stringify2.default)(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      // // history.replace('/home')
    }
  }, {
    key: 'logout',
    value: function logout() {
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // navigate to the home route
      // // history.replace('/home')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGguanMiXSwibmFtZXMiOlsiYXV0aDAiLCJBVVRIX0NPTkZJRyIsImdxbCIsImluaXRBcG9sbG8iLCJjbGllbnQiLCJBVVRIRU5USUNBVEVfVVNFUiIsIkF1dGgiLCJXZWJBdXRoIiwiZG9tYWluIiwiY2xpZW50SUQiLCJjbGllbnRJZCIsInJlZGlyZWN0VXJpIiwiY2FsbGJhY2tVcmwiLCJhdWRpZW5jZSIsInJlc3BvbnNlVHlwZSIsInNjb3BlIiwibG9naW4iLCJiaW5kIiwibG9nb3V0IiwiaGFuZGxlQXV0aGVudGljYXRpb24iLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRob3JpemUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJyZXF1aXJlIiwicGFyc2VIYXNoIiwiaGFzaCIsImxvY2F0aW9uIiwiZXJyIiwiYXV0aFJlc3VsdCIsImFjY2Vzc1Rva2VuIiwiaWRUb2tlbiIsInNldFNlc3Npb24iLCJtdXRhdGUiLCJtdXRhdGlvbiIsInZhcmlhYmxlcyIsInRoZW4iLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwiYXV0aGVudGljYXRlQXV0aDBVc2VyIiwidG9rZW4iLCJ1cmwiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsImFsZXJ0IiwiZXhwaXJlc0F0IiwiZXhwaXJlc0luIiwiRGF0ZSIsImdldFRpbWUiLCJyZW1vdmVJdGVtIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7QUFQUDs7O0FBR0E7OztBQU1BLElBQU0sU0FBTixBQUFlOztBQUVmLElBQU0sb0JBQUEsQUFBb0Isc0JBQTFCOztJLEFBUXFCLG1CQVVuQjtrQkFBYzt3Q0FBQTs7U0FUZCxBQVNjLFlBVEYsa0JBQUosQUFBVTtjQUNSLDRCQURnQixBQUNKLEFBQ3BCO2dCQUFVLDRCQUZj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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nburk/Projects/graphcool/examples/next/with-apollo/Auth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nburk/Projects/graphcool/examples/next/with-apollo/Auth.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi44ZGY5OWM4Zjg4NjZiNTIyOGU0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXV0aC5qcz9jZDU2MzlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBuYnVyayBvbiAyMi4wOS4xNy5cbiAqL1xuLy8gLy8gaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi9oaXN0b3J5J1xuaW1wb3J0IGF1dGgwIGZyb20gJ2F1dGgwLWpzJ1xuaW1wb3J0IHsgQVVUSF9DT05GSUcgfSBmcm9tICcuL2F1dGgwLXZhcmlhYmxlcydcbmltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBpbml0QXBvbGxvIGZyb20gJy4vbGliL2luaXRBcG9sbG8nXG5cbmNvbnN0IGNsaWVudCA9IGluaXRBcG9sbG8oKVxuXG5jb25zdCBBVVRIRU5USUNBVEVfVVNFUiA9IGdxbGBcbiAgbXV0YXRpb24gQXV0aGVudGljYXRlQXV0aDBVc2VyKCRpZFRva2VuOiBTdHJpbmchLCAkYWNjZXNzVG9rZW46IFN0cmluZyEpIHtcbiAgICBhdXRoZW50aWNhdGVBdXRoMFVzZXIoaWRUb2tlbjogJGlkVG9rZW4sIGFjY2Vzc1Rva2VuOiAkYWNjZXNzVG9rZW4pIHtcbiAgICAgIHRva2VuXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGgge1xuICBhdXRoMCA9IG5ldyBhdXRoMC5XZWJBdXRoKHtcbiAgICBkb21haW46IEFVVEhfQ09ORklHLmRvbWFpbixcbiAgICBjbGllbnRJRDogQVVUSF9DT05GSUcuY2xpZW50SWQsXG4gICAgcmVkaXJlY3RVcmk6IEFVVEhfQ09ORklHLmNhbGxiYWNrVXJsLFxuICAgIGF1ZGllbmNlOiBgaHR0cHM6Ly8ke0FVVEhfQ09ORklHLmRvbWFpbn0vdXNlcmluZm9gLFxuICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcbiAgICBzY29wZTogJ29wZW5pZCdcbiAgfSlcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbiA9IHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24uYmluZCh0aGlzKVxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdGhpcy5pc0F1dGhlbnRpY2F0ZWQuYmluZCh0aGlzKVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKVxuICB9XG5cbiAgaGFuZGxlQXV0aGVudGljYXRpb24ocHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhgQXV0aCAtIGhhbmRsZUF1dGhlbnRpY2F0aW9uYClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmVxdWlyZSgndGhlLWxpYicpOyB9XG4gICAgdGhpcy5hdXRoMC5wYXJzZUhhc2goe2hhc2g6IHdpbmRvdy5sb2NhdGlvbi5oYXNofSwgKGVyciwgYXV0aFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBhdXRoIHJlc3VsdGAsIGF1dGhSZXN1bHQpXG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWVudClcbiAgICAgICAgLy8gLy8gaGlzdG9yeS5yZXBsYWNlKCcvaG9tZScpXG4gICAgICAgIGNvbnN0IHthY2Nlc3NUb2tlbiwgaWRUb2tlbn0gPSBhdXRoUmVzdWx0XG4gICAgICAgIGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgIG11dGF0aW9uOiBBVVRIRU5USUNBVEVfVVNFUixcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIGlkVG9rZW4sXG4gICAgICAgICAgICBhY2Nlc3NUb2tlblxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFJlY2VpdmVkIHJlc3BvbnNlOiBgLCByZXNwb25zZSlcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2Mtd2Vic2hvcC10b2tlbicsIHJlc3BvbnNlLmRhdGEuYXV0aGVudGljYXRlQXV0aDBVc2VyLnRva2VuKVxuICAgICAgICAgIC8vIGhpc3RvcnkucmVwbGFjZSgnLycpXG4gICAgICAgICAgcHJvcHMudXJsLnB1c2goJy8nKVxuXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRVJST1I6IGAsIGVycm9yKVxuICAgICAgICAgIC8vIGhpc3RvcnkucmVwbGFjZSgnLycpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICAvLyBoaXN0b3J5LnJlcGxhY2UoJy8nKVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGFsZXJ0KGBFcnJvcjogJHtlcnIuZXJyb3J9LiBDaGVjayB0aGUgY29uc29sZSBmb3IgZnVydGhlciBkZXRhaWxzLmApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldFNlc3Npb24oYXV0aFJlc3VsdCkge1xuICAgIC8vIFNldCB0aGUgdGltZSB0aGF0IHRoZSBhY2Nlc3MgdG9rZW4gd2lsbCBleHBpcmUgYXRcbiAgICBsZXQgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoKGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCkgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbilcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBhdXRoUmVzdWx0LmlkVG9rZW4pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V4cGlyZXNfYXQnLCBleHBpcmVzQXQpXG4gICAgLy8gbmF2aWdhdGUgdG8gdGhlIGhvbWUgcm91dGVcbiAgICAvLyAvLyBoaXN0b3J5LnJlcGxhY2UoJy9ob21lJylcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICAvLyBDbGVhciBhY2Nlc3MgdG9rZW4gYW5kIElEIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZXNfYXQnKVxuICAgIC8vIG5hdmlnYXRlIHRvIHRoZSBob21lIHJvdXRlXG4gICAgLy8gLy8gaGlzdG9yeS5yZXBsYWNlKCcvaG9tZScpXG4gIH1cblxuICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCB0aW1lIGlzIHBhc3QgdGhlXG4gICAgLy8gYWNjZXNzIHRva2VuJ3MgZXhwaXJ5IHRpbWVcbiAgICBsZXQgZXhwaXJlc0F0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlc19hdCcpKVxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXNBdFxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0F1dGguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFSQTs7O0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVVBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQVZBO0FBYUE7QUFFQTtBQUNBO0FBdEJBO0FBd0JBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBOUVBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=