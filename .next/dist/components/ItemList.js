'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _jsxFileName = '/Users/nburk/Projects/graphcool/examples/next/gc-webshop/components/ItemList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['query AllItems {\n  allItems {\n    id\n    name\n    price\n    imageUrl\n    description\n  }\n}'], ['query AllItems {\n  allItems {\n    id\n    name\n    price\n    imageUrl\n    description\n  }\n}']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  mutation AddToItemsInBasket($itemId: ID!, $basketId: ID!) {\n    addToItemsInBasket(inBasketBasketId: $basketId, itemsItemId: $itemId) {\n      itemsItem {\n        id\n      }\n    }\n  }\n'], ['\n  mutation AddToItemsInBasket($itemId: ID!, $basketId: ID!) {\n    addToItemsInBasket(inBasketBasketId: $basketId, itemsItemId: $itemId) {\n      itemsItem {\n        id\n      }\n    }\n  }\n']);

// import { ITEMS_IN_BASKET } from './Header'

var ItemList = function (_React$Component) {
  (0, _inherits3.default)(ItemList, _React$Component);

  function ItemList() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ItemList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ItemList.__proto__ || (0, _getPrototypeOf2.default)(ItemList)).call.apply(_ref, [this].concat(args))), _this), _this._itemSelected = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(itemId) {
        var basketId;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                basketId = localStorage.getItem('gc-webshop-basket');

                if (basketId) {
                  _context.next = 4;
                  break;
                }

                console.log('no basket');
                return _context.abrupt('return');

              case 4:
                _context.next = 6;
                return _this.props.mutate({
                  mutation: ADD_ITEM_TO_BASKET,
                  variables: {
                    itemId: itemId,
                    basketId: basketId
                    // update: (store, response) => {
                    //   console.log(`update store`, store, response)
                    //   const data = store.readQuery({
                    //     query: ITEMS_IN_BASKET
                    //   })
                    //   console.log(`Current data: `, data)
                    //   data._allItemsMeta.count++
                    //   store.writeQuery({
                    //     query: ITEMS_IN_BASKET,
                    //     data
                    //   })
                    // }
                  } });

              case 6:
                _this.props.data.refetch();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ItemList, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.props.data.loading) {
        return _react2.default.createElement('div', { className: 'flex w-100 h-100 items-center justify-center pt7', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, 'Loading data'));
      }

      return _react2.default.createElement('div', { className: 'w-100 flex justify-center pa6', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', { className: 'w-100 flex flex-wrap', style: { maxWidth: 150 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.data.allItems && this.props.data.allItems.map(function (item) {
        return _react2.default.createElement(_Item2.default, {
          key: item.id,
          item: item,
          itemSelected: _this3._itemSelected,
          refresh: function refresh() {
            return _this3.props.data.refetch();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJJdGVtIiwiZ3FsIiwiZ3JhcGhxbCIsImNvbXBvc2UiLCJJdGVtTGlzdCIsIl9pdGVtU2VsZWN0ZWQiLCJpdGVtSWQiLCJiYXNrZXRJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtdXRhdGUiLCJtdXRhdGlvbiIsIkFERF9JVEVNX1RPX0JBU0tFVCIsInZhcmlhYmxlcyIsImRhdGEiLCJyZWZldGNoIiwibG9hZGluZyIsIm1heFdpZHRoIiwiYWxsSXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIkFMTF9JVEVNUyIsIm9wdGlvbnMiLCJmZXRjaFBvbGljeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBSyxBQUFTOzs7Ozs7Ozs7QUFDdkI7O0ksQUFFTTs7Ozs7Ozs7Ozs7Ozs7O2dOQThCSixBOzJGQUFnQixpQkFBQSxBQUFPLFFBQVA7WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFFUjtBQUZRLDJCQUVHLGFBQUEsQUFBYSxRQUZoQixBQUVHLEFBQXFCOztvQkFGeEIsQUFHVCxVQUhTO2tDQUFBO0FBQUE7QUFJWjs7d0JBQUEsQUFBUSxJQUpJO3VDQUFBOzttQkFBQTtnQ0FBQTs2QkFPUixBQUFLLE1BQUwsQUFBVzs0QkFBTyxBQUNaLEFBQ1Y7OzRCQUFXLEFBRVQ7OEJBRlMsQUFJWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QlksQUFPUixBQUFrQjtBQUVYLEFBQ1QsbUJBSG9CLEFBQ3RCLEVBREk7O21CQW1CTjtzQkFBQSxBQUFLLE1BQUwsQUFBVyxLQTFCRyxBQTBCZCxBQUFnQjs7bUJBMUJGO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0E7Ozs7Ozs7Ozs7NkJBNUJQO21CQUNQOztVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBZixBQUFvQixTQUFTLEFBQzNCOytCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBRkosQUFDRSxBQUNFLEFBS0w7QUFFRDs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsd0JBQXVCLE9BQU8sRUFBQyxVQUE5QyxBQUE2QyxBQUFXO29CQUF4RDtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLGlCQUFZLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsU0FBaEIsQUFBeUIsSUFBSSxnQkFBQTsrQkFDeEQsQUFBQztlQUNNLEtBRFAsQUFDWSxBQUNWO2dCQUZGLEFBRVEsQUFDTjt3QkFBYyxPQUhoQixBQUdxQixBQUNuQjttQkFBUyxtQkFBQTttQkFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLEtBQWpCLEFBQU0sQUFBZ0I7QUFKakM7O3NCQUFBO3dCQUR3RCxBQUN4RDtBQUFBO0FBQ0UsU0FERjtBQUhOLEFBQ0UsQUFDK0IsQUFTOUIsT0FUOEIsU0FTOUIsQUFBSyxNQVpWLEFBQ0UsQUFXYyxBQUdqQjs7Ozs7RUE1Qm9CLGdCLEFBQU07O0FBNkQ3QixJQUFNLFlBQUEsQUFBWSxzQkFBbEI7O0FBVUEsSUFBTSxxQkFBQSxBQUFxQixzQkFBM0IsQUFVQTs7c0VBQ0UsQUFBUTs7aUJBREssQUFDYixBQUFtQixBQUNSLEFBQ007QUFETixBQUNQO0FBRmUsQUFDakIsQ0FERixDQURhLEVBTWIsMEJBTmEsQUFNYixBQUFRLHFCQU5WLEFBQWUsQUFPYiIsImZpbGUiOiJJdGVtTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmJ1cmsvUHJvamVjdHMvZ3JhcGhjb29sL2V4YW1wbGVzL25leHQvZ2Mtd2Vic2hvcCJ9