'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nburk/Projects/graphcool/examples/next/gc-webshop/components/Item.js';


var Item = function (_React$Component) {
  (0, _inherits3.default)(Item, _React$Component);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);

    return (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).apply(this, arguments));
  }

  (0, _createClass3.default)(Item, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var token = process.browser ? localStorage.getItem('gc-webshop-token') : null;
      return _react2.default.createElement('div', {
        className: 'bg-white ma3 box post flex flex-column no-underline br2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('div', {
        className: 'image',
        style: {
          backgroundImage: 'url(' + this.props.item.imageUrl + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingBottom: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement('div', { className: 'flex items-center black-80 fw3 description', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.item.name), token && _react2.default.createElement('div', { onClick: function onClick() {
          _this2.props.itemSelected(_this2.props.item.id);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Add to basket'));
    }
  }]);

  return Item;
}(_react2.default.Component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSXRlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkl0ZW0iLCJ0b2tlbiIsInByb2Nlc3MiLCJicm93c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJhY2tncm91bmRJbWFnZSIsInByb3BzIiwiaXRlbSIsImltYWdlVXJsIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJwYWRkaW5nQm90dG9tIiwibmFtZSIsIml0ZW1TZWxlY3RlZCIsImlkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztJQUVELEE7Ozs7Ozs7Ozs7OzZCQUVLO21CQUNQOztVQUFNLFFBQVEsUUFBQSxBQUFRLFVBQVUsYUFBQSxBQUFhLFFBQS9CLEFBQWtCLEFBQXFCLHNCQUFyRCxBQUEyRSxBQUMzRTs2QkFDRSxjQUFBO21CQUFBLEFBQ1k7O29CQURaO3NCQUFBLEFBR0U7QUFIRjtBQUNFLE9BREY7bUJBR0UsQUFDWSxBQUNWOztvQ0FDMEIsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFuQyxBQUF3QyxXQURuQyxBQUVMOzBCQUZLLEFBRVcsQUFDaEI7OEJBSEssQUFHZSxBQUNwQjt5QkFOSixBQUVTLEFBSVU7QUFKVixBQUNMOztvQkFISjtzQkFIRixBQUdFLEFBU0E7QUFUQTtBQUNFLDBCQVFGLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQUFMLEFBQVcsS0FiaEIsQUFZRSxBQUNtQixBQUVsQixnQ0FBUyxjQUFBLFNBQUssU0FBUyxtQkFBTSxBQUM1QjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLE9BQUEsQUFBSyxNQUFMLEFBQVcsS0FBbkMsQUFBd0MsQUFDekM7QUFGUztvQkFBQTtzQkFBQTtBQUFBO09BQUEsRUFoQmQsQUFDRSxBQWVZLEFBS2Y7Ozs7O0VBekJnQixnQkFBTSxBLEFBNkJ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uYnVyay9Qcm9qZWN0cy9ncmFwaGNvb2wvZXhhbXBsZXMvbmV4dC9nYy13ZWJzaG9wIn0=