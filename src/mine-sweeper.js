const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  const sum = (k, l) => {
    let upSide = (k - 1 < 0) ? 0 : k - 1;
    let leftSide = (l - 1 < 0) ? 0 : l - 1;
    let bottomSide = (k + 1 >= matrix.length) ? k : k + 1;
    let rightSide = (l + 1 >= matrix[k].length) ? l : l + 1;
    let resultCell = 0 - +Boolean(matrix[k][l]);
    for (let x = upSide; x <= bottomSide; x++) {
      for (let y = leftSide; y <= rightSide; y++) {
        resultCell += +Boolean(matrix[x][y]);
      }
    }
    console.log(upSide, leftSide, bottomSide, rightSide, resultCell);
    return resultCell;
  }

  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = sum(i, j);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
