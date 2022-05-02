const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let indexArr1 = 0;
  let indexArr2 = 0;
  const arr1 = [...s1].sort();
  const arr2 = [...s2].sort();
  const arr3 = [];
  console.log(arr1, arr2);
  if (arr1.length === 0 || arr2.length === 0) { return arr3.length; }
  for (let i = 0; i <= arr1.length || i <= arr2.length; i++) {
    if (arr1[indexArr1] === arr2[indexArr2]) {
      arr3.push(arr1[indexArr1]);
      indexArr1 += 1;
      indexArr2 += 1;
    } else
      if (arr1[indexArr1] > arr2[indexArr2]) {
        indexArr2 += 1;
      } else
        if (arr1[indexArr1] < arr2[indexArr2]) {
          indexArr1 += 1;
        }
  }
  return arr3.length
}

module.exports = {
  getCommonCharacterCount
};
