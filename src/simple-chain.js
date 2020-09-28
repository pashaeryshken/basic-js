const CustomError = require("../extensions/custom-error");

let arr = [];
const chainMaker = {
  getLength() {
    return arr.length;
  },
  addLink(value) {
    arr.push( `${value}` );
    return this
  },
  removeLink(position) {
    if (position - Math.trunc(position) !== 0 || typeof position !== 'number' || 0 < position > arr.length){
      arr = [];
      throw new Error();
    }
    arr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    arr.reverse();
    return this
  },
  finishChain() {
    const result = `( ${arr.join(' )~~( ')} )`;
    arr = [];
    return result;
  }
};

module.exports = chainMaker;
