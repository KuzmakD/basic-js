const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && (arr[0] === '--discard-prev' || arr[0] === '--double-prev')) continue;
    if ((i === (arr.length - 1)) && (arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next')) break;
    if (arr[i] == `--discard-next`) { k = i + 2; i++; } else
      if (arr[i] == `--discard-prev`) { (i === k) ? k = i : result.pop(); } else
        if (arr[i] == `--double-next`) { result.push(arr[i + 1]); } else
          if (arr[i] == `--double-prev`) {
            (i === k) ? k = i : result.push(arr[i - 1])
          }
          else { result.push(arr[i]); }
  }
  return result;
}

module.exports = {
  transform
};
