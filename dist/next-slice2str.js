/*!
 * name: @feizheng/next-slice2str
 * description: Slice string to two part.
 * homepage: https://github.com/afeiship/next-slice2str
 * version: 1.0.2
 * date: 2020-08-17T06:41:06.700Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.slice2str = function (inString, inIndex, inStep) {
    if (!inString && inString.length <= inIndex) return;
    var step = inStep || 0;
    return [inString.substr(0, inIndex), inString.substr(inIndex + step)];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.slice2str;
  }
})();
