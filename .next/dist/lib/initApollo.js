'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = require('react-apollo');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create(initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: 'https://api.graph.cool/simple/v1/cj7vu6p1219540173k91ck9e0', // Server URL (must be absolute)
      opts: { // Additional fetch() options like `credentials` or `headers`
        credentials: 'same-origin'
      }
    })
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbml0QXBvbGxvLmpzIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsImNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UiLCJmZXRjaCIsImFwb2xsb0NsaWVudCIsInByb2Nlc3MiLCJicm93c2VyIiwiZ2xvYmFsIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwic3NyTW9kZSIsIm5ldHdvcmtJbnRlcmZhY2UiLCJ1cmkiLCJvcHRzIiwiY3JlZGVudGlhbHMiLCJpbml0QXBvbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBUyxBQUFjOztBQUN2QixBQUFPOzs7Ozs7QUFFUCxJQUFJLGVBQUosQUFBbUI7O0FBRW5CO0FBQ0EsSUFBSSxDQUFDLFFBQUwsQUFBYSxTQUFTLEFBQ3BCO1NBQUEsQUFBTyxBQUFRLEFBQ2hCOzs7QUFFRCxTQUFBLEFBQVMsT0FBVCxBQUFpQixjQUFjLEFBQzdCOztrQkFBd0IsQUFFdEI7YUFBUyxDQUFDLFFBRlksQUFFSixTQUFTLEFBQzNCOztXQUF5QyxBQUNsQyw4REFBOEQsQUFDbkU7Y0FBUSxBQUNOO3FCQU5OLEFBQU8sQUFBaUIsQUFHSixBQUF1QixBQUVqQyxBQUNTLEFBSXBCO0FBTFc7QUFGaUMsQUFDdkMsS0FEZ0I7QUFISSxBQUN0QixHQURLLEFBQUk7QUFZYjs7QUFBZSxTQUFBLEFBQVMsV0FBVCxBQUFxQixjQUFjLEFBQ2hEO0FBQ0E7QUFDQTtNQUFJLENBQUMsUUFBTCxBQUFhLFNBQVMsQUFDcEI7V0FBTyxPQUFQLEFBQU8sQUFBTyxBQUNmO0FBRUQ7O0FBQ0E7TUFBSSxDQUFKLEFBQUssY0FBYyxBQUNqQjttQkFBZSxPQUFmLEFBQWUsQUFBTyxBQUN2QjtBQUVEOztTQUFBLEFBQU8sQUFDUiIsImZpbGUiOiJpbml0QXBvbGxvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uYnVyay9Qcm9qZWN0cy9ncmFwaGNvb2wvZXhhbXBsZXMvbmV4dC9nYy13ZWJzaG9wIn0=