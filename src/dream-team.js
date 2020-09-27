const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  try {
    const string = arr.reduce((string, item) => {
      if (typeof item === 'string') {
        return string += item.trim()[0]
      } else {
        return string
      }
    }, '');
    if (string) {
      return string.toUpperCase().split('').sort().join('');
    }
    throw new CustomError('Not implemented');
  } catch (e) {
    return false
  }

  // remove line with error and write your code here
};
