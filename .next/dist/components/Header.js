'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITEMS_IN_BASKET = undefined;

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

var _jsxFileName = '/Users/nburk/Projects/graphcool/examples/next/gc-webshop/components/Header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query ItemsInBasket($basketId: ID) {\n    Basket(id: $basketId) {\n      _itemsMeta {\n        count\n      }\n    }\n  }\n'], ['\n  query ItemsInBasket($basketId: ID) {\n    Basket(id: $basketId) {\n      _itemsMeta {\n        count\n      }\n    }\n  }\n']);

var header = function header(_ref) {
  var pathname = _ref.pathname,
      login = _ref.login,
      data = _ref.data;

  var token = process.browser ? localStorage.getItem('gc-webshop-token') : null;
  var itemCount = !data.loading && data.Basket && data.Basket._itemsMeta ? data.Basket._itemsMeta.count : 0;

  return _react2.default.createElement('header', {
    'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Home')), !token ? _react2.default.createElement('div', { className: 'ml1 black pointer', onClick: function onClick() {
      login();
    }, 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'login') : _react2.default.createElement('div', { className: 'ml1 no-underline black pointer', onClick: function onClick() {
      if (process.browser) {
        localStorage.clear();
        location.reload();
      }
    }, 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'logout'), token && _react2.default.createElement(_link2.default, { prefetch: true, href: '/basket', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, itemCount, ' items in basket')), _react2.default.createElement(_style2.default, {
    styleId: 2280026175,
    css: 'header[data-jsx="2280026175"]{margin-bottom:25px}a[data-jsx="2280026175"]{font-size:14px;margin-right:15px;text-decoration:none}.is-active[data-jsx="2280026175"]{text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCa0IsQUFHNEIsQUFHSixBQUtXLGVBSlIsSUFIcEIsT0FRQSxPQUp1QixxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L2djLXdlYnNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge2dxbCwgZ3JhcGhxbH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5jb25zdCBoZWFkZXIgPSAoeyBwYXRobmFtZSwgbG9naW4sIGRhdGEgfSkgPT4ge1xuXG4gIGNvbnN0IHRva2VuID0gcHJvY2Vzcy5icm93c2VyID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2djLXdlYnNob3AtdG9rZW4nKSA6IG51bGxcbiAgY29uc3QgaXRlbUNvdW50ID0gKCFkYXRhLmxvYWRpbmcgJiYgZGF0YS5CYXNrZXQgJiYgZGF0YS5CYXNrZXQuX2l0ZW1zTWV0YSkgPyBkYXRhLkJhc2tldC5faXRlbXNNZXRhLmNvdW50IDogMFxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnLycgJiYgJ2lzLWFjdGl2ZSd9PkhvbWU8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICB7IXRva2VuID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbDEgYmxhY2sgcG9pbnRlcicgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgbG9naW4oKVxuICAgICAgICAgIH19PmxvZ2luPC9kaXY+KVxuICAgICAgICA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwxIG5vLXVuZGVybGluZSBibGFjayBwb2ludGVyJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0+bG9nb3V0PC9kaXY+KVxuICAgICAgfVxuICAgICAge3Rva2VuICYmXG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYmFza2V0Jz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nICYmICdpcy1hY3RpdmUnfT57aXRlbUNvdW50fSBpdGVtcyBpbiBiYXNrZXQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApXG5cbn1cblxuZXhwb3J0IGNvbnN0IElURU1TX0lOX0JBU0tFVCA9IGdxbGBcbiAgcXVlcnkgSXRlbXNJbkJhc2tldCgkYmFza2V0SWQ6IElEKSB7XG4gICAgQmFza2V0KGlkOiAkYmFza2V0SWQpIHtcbiAgICAgIF9pdGVtc01ldGEge1xuICAgICAgICBjb3VudFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKElURU1TX0lOX0JBU0tFVCwge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBiYXNrZXRJZDogcHJvY2Vzcy5icm93c2VyID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2djLXdlYnNob3AtYmFza2V0JykgOiBcIlwiXG4gICAgfVxuICB9XG59KShoZWFkZXIpXG5cblxuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};

var ITEMS_IN_BASKET = exports.ITEMS_IN_BASKET = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(ITEMS_IN_BASKET, {
  options: {
    variables: {
      basketId: process.browser ? localStorage.getItem('gc-webshop-basket') : ""
    }
  }
})(header);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJncWwiLCJncmFwaHFsIiwiaGVhZGVyIiwicGF0aG5hbWUiLCJsb2dpbiIsImRhdGEiLCJ0b2tlbiIsInByb2Nlc3MiLCJicm93c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1Db3VudCIsImxvYWRpbmciLCJCYXNrZXQiLCJfaXRlbXNNZXRhIiwiY291bnQiLCJjbGVhciIsImxvY2F0aW9uIiwicmVsb2FkIiwiSVRFTVNfSU5fQkFTS0VUIiwib3B0aW9ucyIsInZhcmlhYmxlcyIsImJhc2tldElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVEsQUFBSzs7Ozs7Ozs7QUFFYixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQStCO01BQTVCLEFBQTRCLGdCQUE1QixBQUE0QjtNQUFsQixBQUFrQixhQUFsQixBQUFrQjtNQUFYLEFBQVcsWUFBWCxBQUFXLEFBRTVDOztNQUFNLFFBQVEsUUFBQSxBQUFRLFVBQVUsYUFBQSxBQUFhLFFBQS9CLEFBQWtCLEFBQXFCLHNCQUFyRCxBQUEyRSxBQUMzRTtNQUFNLFlBQWEsQ0FBQyxLQUFELEFBQU0sV0FBVyxLQUFqQixBQUFzQixVQUFVLEtBQUEsQUFBSyxPQUF0QyxBQUE2QyxhQUFjLEtBQUEsQUFBSyxPQUFMLEFBQVksV0FBdkUsQUFBa0YsUUFBcEcsQUFBNEcsQUFFNUc7O3lCQUNFLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFXLGFBQUEsQUFBYSxPQUEzQixBQUFrQyx5QkFBbEM7O2dCQUFBO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRCxXQUFBLEFBQUMsd0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSxxQkFBb0IsU0FBUyxtQkFBTSxBQUNoRDtBQUNEO0FBRkQsbUJBQUE7O2dCQUFBO2tCQUFBO0FBQUE7R0FBQSxFQURILEFBQ0csMkJBSUEsY0FBQSxTQUFLLFdBQUwsQUFBZSxrQ0FBaUMsU0FBUyxtQkFBTSxBQUM3RDtVQUFJLFFBQUosQUFBWSxTQUFTLEFBQ25CO3FCQUFBLEFBQWEsQUFDYjtpQkFBQSxBQUFTLEFBQ1Y7QUFDRjtBQUxELG1CQUFBOztnQkFBQTtrQkFBQTtBQUFBO0dBQUEsRUFUTixBQVNNLEFBT0gsb0NBQ0QsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLE9BQTNCLEFBQWtDLHlCQUFsQzs7Z0JBQUE7a0JBQUEsQUFBZ0Q7QUFBaEQ7S0FBQSxXQWxCSixBQWlCRSxBQUNFO2FBbEJKO1NBREYsQUFDRSxBQXFDSDtBQXJDRztBQU5KLEFBNkNBOztBQUFPLElBQU0sNENBQUEsQUFBa0Isc0JBQXhCLEFBVVA7OzRDQUFlLEFBQVE7OztnQkFHUCxRQUFBLEFBQVEsVUFBVSxhQUFBLEFBQWEsUUFBL0IsQUFBa0IsQUFBcUIsdUJBSHhDLEFBQXlCLEFBQzdCLEFBQ0ksQUFDK0Q7QUFEL0QsQUFDVDtBQUZLLEFBQ1A7QUFGb0MsQUFDdEMsQ0FEYSxFQUFmLEFBQWUsQUFNWiIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L2djLXdlYnNob3AifQ==