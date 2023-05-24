import nx from '@jswork/next';

nx.slice2str = function (inString, inIndex, inStep) {
  if (!inString && inString.length <= inIndex) return;
  var step = inStep || 0;
  return [inString.substr(0, inIndex), inString.substr(inIndex + step)];
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.slice2str;
}

export default nx.slice2str;
