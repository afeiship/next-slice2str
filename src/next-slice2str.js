(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.slice2str = function(inString, inIndex, inStep) {
    if (!inString && inString.length <= inIndex) return;
    return [
      inString.substr(0, inIndex),
      inString.substr(inIndex + (inStep || 1))
    ];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.slice2str;
  }
})();
