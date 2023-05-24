/*!
 * name: @jswork/next-slice2str
 * description: Slice string to two part.
 * homepage: https://js.work
 * version: 1.0.0
 * date: 2023-05-24 15:12:39
 * license: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _next = _interopRequireDefault(require('@jswork/next'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_next['default'].slice2str = function (inString, inIndex, inStep) {
  if (!inString && inString.length <= inIndex) return;
  var step = inStep || 0;
  return [inString.substr(0, inIndex), inString.substr(inIndex + step)];
};
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = _next['default'].slice2str;
}
var _default = _next['default'].slice2str;
exports['default'] = _default;
