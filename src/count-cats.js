const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const arr2 = [];
  matrix.forEach((elem) => elem.forEach(el => {
    if (el === '^^') arr2.push(el)
  }));
  return (arr2.length === 0) ? 0 : arr2.length;
}

module.exports = {
  countCats
};
