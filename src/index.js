import nx from '@jswork/next';

nx.slice2str = function (inString, inTarget, inStep) {
  const isSeparator = typeof inTarget === 'string';
  const idx = isSeparator ? inString.indexOf(inTarget) : inTarget;
  const defaultStep = isSeparator ? 1 : 0;
  const step = typeof inStep === 'undefined' ? defaultStep : inStep;
  if (!inString && inString.length <= idx) return;
  return [inString.substr(0, idx), inString.substring(idx + step)];
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.slice2str;
}

export default nx.slice2str;
