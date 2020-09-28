const CustomError = require("../extensions/custom-error");

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

module.exports = class DepthCalculator {
  calculateDepth(arr, level = 0) {
    if (arr instanceof Array){
      if (arr.length === 0) return level + 1;
      return arr.map((value)=> {
        return this.calculateDepth(value, level + 1)
      }).max();
    }
    return level;
  }
};
