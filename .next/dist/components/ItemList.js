'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _Item = require('../components/Item');

var _Item2 = _interopRequireDefault(_Item);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nburk/Projects/graphcool/examples/next/with-apollo/components/ItemList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['query AllItems {\n  allItems {\n    id\n    name\n    price\n    imageUrl\n    description\n  }\n}'], ['query AllItems {\n  allItems {\n    id\n    name\n    price\n    imageUrl\n    description\n  }\n}']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  mutation AddToItemsInBasket($itemId: ID!, $basketId: ID!) {\n    addToItemsInBasket(inBasketBasketId: $basketId, itemsItemId: $itemId) {\n      itemsItem {\n        id\n      }\n    }\n  }\n'], ['\n  mutation AddToItemsInBasket($itemId: ID!, $basketId: ID!) {\n    addToItemsInBasket(inBasketBasketId: $basketId, itemsItemId: $itemId) {\n      itemsItem {\n        id\n      }\n    }\n  }\n']);

var ItemList = function (_React$Component) {
  (0, _inherits3.default)(ItemList, _React$Component);

  function ItemList() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ItemList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ItemList.__proto__ || (0, _getPrototypeOf2.default)(ItemList)).call.apply(_ref, [this].concat(args))), _this), _this._itemSelected = function (itemId) {

      var basketId = localStorage.getItem('gc-webshop-basket');
      if (!basketId) {
        console.log('no basket');
        return;
      }
      _this.props.mutate({
        mutation: ADD_ITEM_TO_BASKET,
        variables: {
          itemId: itemId,
          basketId: basketId
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ItemList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.data.loading) {
        return _react2.default.createElement('div', { className: 'flex w-100 h-100 items-center justify-center pt7', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, 'Loading data'));
      }

      return _react2.default.createElement('div', { className: 'w-100 flex justify-center pa6', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'w-100 flex flex-wrap', style: { maxWidth: 150 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.data.allItems && this.props.data.allItems.map(function (item) {
        return _react2.default.createElement(_Item2.default, {
          key: item.id,
          item: item,
          itemSelected: _this2._itemSelected,
          refresh: function refresh() {
            return _this2.props.data.refetch();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        });
      })), this.props.children);
    }
  }]);

  return ItemList;
}(_react2.default.Component);

var ALL_ITEMS = (0, _reactApollo.gql)(_templateObject);

var ADD_ITEM_TO_BASKET = (0, _reactApollo.gql)(_templateObject2);

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(ALL_ITEMS, {
  options: {
    fetchPolicy: 'network-only'
  }
}), (0, _reactApollo.graphql)(ADD_ITEM_TO_BASKET))(ItemList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJJdGVtIiwiZ3FsIiwiZ3JhcGhxbCIsImNvbXBvc2UiLCJJdGVtTGlzdCIsIl9pdGVtU2VsZWN0ZWQiLCJpdGVtSWQiLCJiYXNrZXRJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtdXRhdGUiLCJtdXRhdGlvbiIsIkFERF9JVEVNX1RPX0JBU0tFVCIsInZhcmlhYmxlcyIsIm5leHRQcm9wcyIsImRhdGEiLCJsb2FkaW5nIiwibWF4V2lkdGgiLCJhbGxJdGVtcyIsIm1hcCIsIml0ZW0iLCJpZCIsInJlZmV0Y2giLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIkFMTF9JVEVNUyIsIm9wdGlvbnMiLCJmZXRjaFBvbGljeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQUssQUFBUzs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7O2dOQW1DSixBLGdCQUFnQixVQUFBLEFBQUMsUUFBVyxBQUUxQjs7VUFBTSxXQUFXLGFBQUEsQUFBYSxRQUE5QixBQUFpQixBQUFxQixBQUN0QztVQUFJLENBQUosQUFBSyxVQUFVLEFBQ2I7Z0JBQUEsQUFBUSxJQUNSO0FBQ0Q7QUFDRDtZQUFBLEFBQUssTUFBTCxBQUFXO2tCQUFPLEFBQ04sQUFDVjs7a0JBQVcsQUFFVDtvQkFKSixBQUFrQixBQUVMLEFBTWQ7QUFOYyxBQUNUO0FBSGMsQUFDaEI7QTs7Ozs7OEMsQUF6Q3NCLFdBQVcsQUFFcEM7Ozs2QkFFUTttQkFDUDs7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQWYsQUFBb0IsU0FBUyxBQUMzQjsrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQUZKLEFBQ0UsQUFDRSxBQUtMO0FBR0Q7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLHdCQUF1QixPQUFPLEVBQUMsVUFBOUMsQUFBNkMsQUFBVztvQkFBeEQ7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixpQkFBWSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLFNBQWhCLEFBQXlCLElBQUksZ0JBQUE7K0JBQ3hELEFBQUM7ZUFDTSxLQURQLEFBQ1ksQUFDVjtnQkFGRixBQUVRLEFBQ047d0JBQWMsT0FIaEIsQUFHcUIsQUFDbkI7bUJBQVMsbUJBQUE7bUJBQU0sT0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFqQixBQUFNLEFBQWdCO0FBSmpDOztzQkFBQTt3QkFEd0QsQUFDeEQ7QUFBQTtBQUNFLFNBREY7QUFITixBQUNFLEFBQytCLEFBUzlCLE9BVDhCLFNBUzlCLEFBQUssTUFaVixBQUNFLEFBV2MsQUFHakI7Ozs7O0VBakNvQixnQkFBTSxBOztBQXFEN0IsSUFBTSxZQUFBLEFBQVksc0JBQWxCOztBQVVBLElBQU0scUJBQUEsQUFBcUIsc0JBQTNCLEFBVUE7O3NFQUNFLEFBQVE7O2lCQURLLEFBQ2IsQUFBbUIsQUFDUixBQUNNO0FBRE4sQUFDUDtBQUZlLEFBQ2pCLENBREYsQ0FEYSxFQU1iLDBCQU5hLEFBTWIsQUFBUSxxQkFOVixBQUFlLEFBT2IiLCJmaWxlIjoiSXRlbUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L3dpdGgtYXBvbGxvIn0=