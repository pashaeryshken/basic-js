const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } ) {
  let string = str;
  let result = [];
  if (`${addition}` && addition !== ''){
    for (let i = 0; i < additionRepeatTimes; i++) {
      result.push(`${addition}`);
    }
    string += result.join(additionSeparator);
    result = [];
  }
  if (`${str}`) {
    for (let i = 0; i < repeatTimes; i++) {
      result.push(string);
    }
    return result.join(separator);
  }


  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
