'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nburk/Projects/graphcool/examples/next/with-apollo/components/Header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query ItemsInBasket($basketId: ID!) {\n    _allItemsMeta(filter: {\n      inBasket: {\n        id: $basketId\n      }\n    }) {\n      count\n    }\n  }\n'], ['\n  query ItemsInBasket($basketId: ID!) {\n    _allItemsMeta(filter: {\n      inBasket: {\n        id: $basketId\n      }\n    }) {\n      count\n    }\n  }\n']);

var header = function header(_ref) {
  var pathname = _ref.pathname,
      login = _ref.login,
      data = _ref.data;

  var token = void 0;
  if (process.browser) {
    token = localStorage.getItem('gc-webshop-token');
  }

  var itemCount = !data.loading && data._allItems ? data._allItems.count : 0;

  return _react2.default.createElement('header', {
    'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Home')), !token ? _react2.default.createElement('div', { className: 'ml1 black pointer', onClick: function onClick() {
      login();
    }, 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'login') : _react2.default.createElement('div', { className: 'ml1 no-underline black pointer', onClick: function onClick() {
      if (process.browser) {
        localStorage.clear();
        location.reload();
      }
    }, 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'logout'), _react2.default.createElement(_link2.default, { prefetch: true, href: '/basket', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, itemCount, ' Basket')), _react2.default.createElement(_style2.default, {
    styleId: 2280026175,
    css: 'header[data-jsx="2280026175"]{margin-bottom:25px}a[data-jsx="2280026175"]{font-size:14px;margin-right:15px;text-decoration:none}.is-active[data-jsx="2280026175"]{text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHNEIsQUFHSixBQUtXLGVBSlIsSUFIcEIsT0FRQSxPQUp1QixxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L3dpdGgtYXBvbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtncWwsIGdyYXBocWx9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuY29uc3QgaGVhZGVyID0gKHsgcGF0aG5hbWUsIGxvZ2luLCBkYXRhIH0pID0+IHtcblxuICBsZXQgdG9rZW5cbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2djLXdlYnNob3AtdG9rZW4nKVxuICB9XG5cbiAgY29uc3QgaXRlbUNvdW50ID0gKCFkYXRhLmxvYWRpbmcgJiYgZGF0YS5fYWxsSXRlbXMpID8gZGF0YS5fYWxsSXRlbXMuY291bnQgOiAwXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyAmJiAnaXMtYWN0aXZlJ30+SG9tZTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIHshdG9rZW4gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sMSBibGFjayBwb2ludGVyJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBsb2dpbigpXG4gICAgICAgICAgfX0+bG9naW48L2Rpdj4pXG4gICAgICAgIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbDEgbm8tdW5kZXJsaW5lIGJsYWNrIHBvaW50ZXInIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fT5sb2dvdXQ8L2Rpdj4pXG4gICAgICB9XG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYmFza2V0Jz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nICYmICdpcy1hY3RpdmUnfT57aXRlbUNvdW50fSBCYXNrZXQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApXG5cbn1cblxuY29uc3QgSVRFTVNfSU5fQkFTS0VUID0gZ3FsYFxuICBxdWVyeSBJdGVtc0luQmFza2V0KCRiYXNrZXRJZDogSUQhKSB7XG4gICAgX2FsbEl0ZW1zTWV0YShmaWx0ZXI6IHtcbiAgICAgIGluQmFza2V0OiB7XG4gICAgICAgIGlkOiAkYmFza2V0SWRcbiAgICAgIH1cbiAgICB9KSB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKElURU1TX0lOX0JBU0tFVCwge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBiYXNrZXRJZDogcHJvY2Vzcy5icm93c2VyID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2djLXdlYnNob3AtYmFza2V0JykgOiBudWxsXG4gICAgfVxuICB9XG59KShoZWFkZXIpXG5cblxuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};

var ITEMS_IN_BASKET = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(ITEMS_IN_BASKET, {
  options: {
    variables: {
      basketId: process.browser ? localStorage.getItem('gc-webshop-basket') : null
    }
  }
})(header);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJncWwiLCJncmFwaHFsIiwiaGVhZGVyIiwicGF0aG5hbWUiLCJsb2dpbiIsImRhdGEiLCJ0b2tlbiIsInByb2Nlc3MiLCJicm93c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1Db3VudCIsImxvYWRpbmciLCJfYWxsSXRlbXMiLCJjb3VudCIsImNsZWFyIiwibG9jYXRpb24iLCJyZWxvYWQiLCJJVEVNU19JTl9CQVNLRVQiLCJvcHRpb25zIiwidmFyaWFibGVzIiwiYmFza2V0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFRLEFBQUs7Ozs7Ozs7O0FBRWIsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUErQjtNQUE1QixBQUE0QixnQkFBNUIsQUFBNEI7TUFBbEIsQUFBa0IsYUFBbEIsQUFBa0I7TUFBWCxBQUFXLFlBQVgsQUFBVyxBQUU1Qzs7TUFBSSxhQUFKLEFBQ0E7TUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtZQUFRLGFBQUEsQUFBYSxRQUFyQixBQUFRLEFBQXFCLEFBQzlCO0FBRUQ7O01BQU0sWUFBYSxDQUFDLEtBQUQsQUFBTSxXQUFXLEtBQWxCLEFBQXVCLFlBQWEsS0FBQSxBQUFLLFVBQXpDLEFBQW1ELFFBQXJFLEFBQTZFLEFBRTdFOzt5QkFDRSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsT0FBM0IsQUFBa0MseUJBQWxDOztnQkFBQTtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBRUQsV0FBQSxBQUFDLHdCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUscUJBQW9CLFNBQVMsbUJBQU0sQUFDaEQ7QUFDRDtBQUZELG1CQUFBOztnQkFBQTtrQkFBQTtBQUFBO0dBQUEsRUFESCxBQUNHLDJCQUlBLGNBQUEsU0FBSyxXQUFMLEFBQWUsa0NBQWlDLFNBQVMsbUJBQU0sQUFDN0Q7VUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtxQkFBQSxBQUFhLEFBQ2I7aUJBQUEsQUFBUyxBQUNWO0FBQ0Y7QUFMRCxtQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtHQUFBLEVBVE4sQUFTTSxBQU9KLDJCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsT0FBM0IsQUFBa0MseUJBQWxDOztnQkFBQTtrQkFBQSxBQUFnRDtBQUFoRDtLQUFBLFdBakJKLEFBZ0JFLEFBQ0U7YUFqQko7U0FERixBQUNFLEFBbUNIO0FBbkNHO0FBVko7O0FBK0NBLElBQU0sa0JBQUEsQUFBa0Isc0JBQXhCLEFBWUE7OzRDQUFlLEFBQVE7OztnQkFHUCxRQUFBLEFBQVEsVUFBVSxhQUFBLEFBQWEsUUFBL0IsQUFBa0IsQUFBcUIsdUJBSHhDLEFBQXlCLEFBQzdCLEFBQ0ksQUFDK0Q7QUFEL0QsQUFDVDtBQUZLLEFBQ1A7QUFGb0MsQUFDdEMsQ0FEYSxFQUFmLEFBQWUsQUFNWiIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L3dpdGgtYXBvbGxvIn0=