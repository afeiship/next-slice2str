import nx from '@jswork/next';

nx.slice2str = function (inString, inTarget, inStep) {
  const idx = typeof inTarget === 'string' ? inString.indexOf(inTarget) : inTarget;
  const step = typeof inStep === 'undefined' ? 1 : inStep;
  if (!inString && inString.length <= idx) return;
  return [inString.substr(0, idx), inString.substr(idx + step)];
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.slice2str;
}

export default nx.slice2str;
