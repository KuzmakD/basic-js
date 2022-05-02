const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const sum = (num) => {
  let res = 0;
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    res = res + Number(str[i]);
  }
  return res;
}

function getSumOfDigits(n) {
  let result = n;
  while (result >= 10) {
    result = sum(result);
  }
  return result;
}

module.exports = {
  getSumOfDigits
};
