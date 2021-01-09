/*!
 * name: @jswork/next-slice2str
 * description: Slice string to two part.
 * homepage: https://github.com/afeiship/next-slice2str
 * version: 1.0.1
 * date: 2021-01-06 22:38:10
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.slice2str = function (inString, inIndex, inStep) {
    if (!inString && inString.length <= inIndex) return;
    var step = inStep || 0;
    return [inString.substr(0, inIndex), inString.substr(inIndex + step)];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.slice2str;
  }
})();
