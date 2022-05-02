const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  return (str.match(/(.)\1*/g) || []).map(x => x.length === 1 ? `${x[0]}` : `${x.length}${x[0]}`).join('');

}

module.exports = {
  encodeLine
};
