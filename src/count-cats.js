const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {

  return arr.flat().reduce((sum ,item ) => {
    return sum += item === '^^' ? 1 : 0
  }, 0);

  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
