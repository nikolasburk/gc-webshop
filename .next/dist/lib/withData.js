'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require('react-apollo');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _initApollo = require('./initApollo');

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nburk/Projects/graphcool/examples/next/with-apollo/lib/withData.js';


// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, url, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 19;
                    break;
                  }

                  apollo = (0, _initApollo2.default)();
                  // Provide the `url` prop data in case a GraphQL query uses it

                  url = { query: ctx.query, pathname: ctx.pathname };
                  _context.prev = 9;
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(_react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    }
                  }))));

                case 12:
                  _context.next = 16;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](9);

                case 16:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  _head2.default.rewind();

                  // Extract query data from the Apollo store
                  state = apollo.getInitialState();

                  serverState = {
                    apollo: {
                      // Only include the Apollo data state
                      data: state.data
                    }
                  };

                case 19:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 20:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[9, 14]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)(_this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        })));
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi93aXRoRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkFwb2xsb1Byb3ZpZGVyIiwiZ2V0RGF0YUZyb21UcmVlIiwiSGVhZCIsImluaXRBcG9sbG8iLCJnZXRDb21wb25lbnREaXNwbGF5TmFtZSIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwibmFtZSIsImN0eCIsInNlcnZlclN0YXRlIiwiY29tcG9zZWRJbml0aWFsUHJvcHMiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsInByb2Nlc3MiLCJicm93c2VyIiwiYXBvbGxvIiwidXJsIiwicXVlcnkiLCJwYXRobmFtZSIsInJld2luZCIsInN0YXRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGF0YSIsInByb3BzIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBZ0I7O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUDtBQUNBLFNBQUEsQUFBUyx3QkFBVCxBQUFrQyxXQUFXLEFBQzNDO1NBQU8sVUFBQSxBQUFVLGVBQWUsVUFBekIsQUFBbUMsUUFBMUMsQUFBa0QsQUFDbkQ7QUFFRDs7a0JBQWUsNkJBQXFCO2NBQ2xDOztzREFBQTtzQ0FBQTs7O1dBQUE7eUJBQUE7NkdBQUEsQUFNZ0MsS0FOaEM7OERBQUE7d0VBQUE7c0JBQUE7K0NBQUE7cUJBT1E7QUFQUixnQ0FBQSxBQU9zQixBQUVsQjs7QUFDSTs7QUFWUix5Q0FBQSxBQVUrQjs7dUJBQ3ZCLGtCQVhSLEFBVzBCLGlCQVgxQjtvQ0FBQTtBQUFBO0FBQUE7O2tDQUFBO3lCQVltQyxrQkFBQSxBQUFrQixnQkFackQsQUFZbUMsQUFBa0M7O3FCQUEvRDtBQVpOLGtEQUFBOztxQkFBQTtzQkFpQlMsUUFqQlQsQUFpQmlCLFNBakJqQjtvQ0FBQTtBQUFBO0FBa0JZOztBQWxCWiwyQkFBQSxBQWtCcUIsQUFDZjtBQUNNOztBQXBCWix3QkFvQmtCLEVBQUMsT0FBTyxJQUFSLEFBQVksT0FBTyxVQUFVLElBcEIvQyxBQW9Ca0IsQUFBaUM7a0NBcEJuRDtrQ0FBQTsyRUF3QlUsQUFBQyw2Q0FBZSxRQUFoQixBQUF3QjtnQ0FBeEI7a0NBQUEsQUFDRTtBQURGO21CQUFBLGdDQUNFLEFBQUMsNENBQWtCLEtBQW5CLEFBQXdCLE9BQXhCLEFBQWlDOztnQ0FBakM7a0NBekJaLEFBdUJjLEFBQ0osQUFDRTtBQUFBO0FBQUEsc0JBRkU7O3FCQXZCZDtrQ0FBQTtBQUFBOztxQkFBQTtrQ0FBQTtrREFBQTs7cUJBaUNNO0FBQ0E7QUFDQTtpQ0FBQSxBQUFLLEFBRUw7O0FBQ007QUF0Q1osMEJBc0NvQixPQXRDcEIsQUFzQ29CLEFBQU8sQUFFckI7Ozs7QUFHSTs0QkFBTSxNQTNDaEIsQUF3Q00sQUFBYyxBQUNKLEFBRU07QUFGTixBQUNOO0FBRlUsQUFDWjs7cUJBekNSOztpQ0FBQTtBQWlETSxxQkFqRE4sQUFrRFM7O3FCQWxEVDtxQkFBQTtrQ0FBQTs7QUFBQTtpQ0FBQTtBQUFBOztxQ0FBQTtrQ0FBQTtBQUFBOztlQUFBO0FBQUEsQUFzREU7QUF0REY7O3NCQXNERSxBQUFhLE9BQU87MENBQUE7OzRJQUFBLEFBQ1osQUFDTjs7WUFBQSxBQUFLLFNBQVMsMEJBQVcsTUFBQSxBQUFLLE1BRlosQUFFbEIsQUFBYyxBQUFzQjthQUNyQztBQXpESDs7O1dBQUE7K0JBMkRZLEFBQ1I7K0JBQ0UsQUFBQyw2Q0FBZSxRQUFRLEtBQXhCLEFBQTZCO3NCQUE3Qjt3QkFBQSxBQUNFO0FBREY7U0FBQSxnQ0FDRSxBQUFDLDhDQUFzQixLQUF2QixBQUE0Qjs7c0JBQTVCO3dCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7QUFBQTtBQTlEUjtBQUFBOztXQUFBO0lBQThCLGdCQUE5QixBQUFvQyxtQkFBcEMsQUFDUyw0QkFBMEIsd0JBRG5DLEFBQ21DLEFBQXdCLGlDQUQzRCxBQUVTO2lCQUNRLG9CQUFBLEFBQVUsT0FIM0IsQUFFcUIsQUFDYTtBQURiLEFBQ2pCLEtBZ0VMO0FBcEVEIiwiZmlsZSI6IndpdGhEYXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uYnVyay9Qcm9qZWN0cy9ncmFwaGNvb2wvZXhhbXBsZXMvbmV4dC93aXRoLWFwb2xsbyJ9