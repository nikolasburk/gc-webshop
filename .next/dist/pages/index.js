'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _ItemList = require('../components/ItemList');

var _ItemList2 = _interopRequireDefault(_ItemList);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _Auth = require('../Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nburk/Projects/graphcool/examples/next/gc-webshop/pages/index.js?entry';
var auth = exports.auth = new _Auth2.default();

exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_Header2.default, { login: auth.login, pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_ItemList2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIkhlYWRlciIsIkl0ZW1MaXN0Iiwid2l0aERhdGEiLCJBdXRoIiwiYXV0aCIsInByb3BzIiwibG9naW4iLCJ1cmwiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUVQOzs7Ozs7O0FBQU8sSUFBTSxzQkFBTixBQUFhLEFBQUksQUFFeEI7OzBDQUF3QixVQUFBLEFBQUMsT0FBRDt5QkFDdEIsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGtDQUFPLE9BQU8sS0FBZixBQUFvQixPQUFPLFVBQVUsTUFBQSxBQUFNLElBQTNDLEFBQStDO2dCQUEvQztrQkFERixBQUNFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDOztnQkFBRDtrQkFIb0IsQUFDdEIsQUFFRTtBQUFBO0FBQUE7QUFISixBQUFlLENBQUEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL25idXJrL1Byb2plY3RzL2dyYXBoY29vbC9leGFtcGxlcy9uZXh0L2djLXdlYnNob3AifQ==