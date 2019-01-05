(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.slice2str = function(inString, inIndex, inStep) {
    if (!inString && inString.length <= inIndex) return;
    var step = typeof inStep === 'undefined' ? 1 : inStep;
    return [
      inString.substr(0, inIndex),
      inString.substr(inIndex + step)
    ];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.slice2str;
  }
})();
