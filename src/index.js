(function () {
  var global = global || this || window || Function('return this')();
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
