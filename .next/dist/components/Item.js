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

var _jsxFileName = '/Users/nburk/Projects/graphcool/examples/next/with-apollo/components/Item.js';


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

      return _react2.default.createElement('div', {
        className: 'bg-white ma3 box post flex flex-column no-underline br2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
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
          lineNumber: 10
        }
      }), _react2.default.createElement('div', { className: 'flex items-center black-80 fw3 description', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, this.props.item.name), _react2.default.createElement('div', { onClick: function onClick() {
          _this2.props.itemSelected(_this2.props.item.id);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Add to basket'));
    }
  }]);

  return Item;
}(_react2.default.Component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSXRlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkl0ZW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9wcyIsIml0ZW0iLCJpbWFnZVVybCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwicGFkZGluZ0JvdHRvbSIsIm5hbWUiLCJpdGVtU2VsZWN0ZWQiLCJpZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs2QkFFSzttQkFDUDs7NkJBQ0UsY0FBQTttQkFBQSxBQUNZOztvQkFEWjtzQkFBQSxBQUdFO0FBSEY7QUFDRSxPQURGO21CQUdFLEFBQ1ksQUFDVjs7b0NBQzBCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBbkMsQUFBd0MsV0FEbkMsQUFFTDswQkFGSyxBQUVXLEFBQ2hCOzhCQUhLLEFBR2UsQUFDcEI7eUJBTkosQUFFUyxBQUlVO0FBSlYsQUFDTDs7b0JBSEo7c0JBSEYsQUFHRSxBQVNBO0FBVEE7QUFDRSwwQkFRRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDtjQUNHLEFBQUssTUFBTCxBQUFXLEtBYmhCLEFBWUUsQUFDbUIsQUFFbkIsdUJBQUEsY0FBQSxTQUFLLFNBQVMsbUJBQU0sQUFDbEI7aUJBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxPQUFBLEFBQUssTUFBTCxBQUFXLEtBQW5DLEFBQXdDLEFBQ3pDO0FBRkQ7b0JBQUE7c0JBQUE7QUFBQTtTQWhCSixBQUNFLEFBZUUsQUFLTDs7Ozs7RUF4QmdCLGdCQUFNLEEsQUE0QnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Ikl0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L3dpdGgtYXBvbGxvIn0=