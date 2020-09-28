const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (!(sampleActivity instanceof Number)) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / (Math.ceil(Math.log(15/1.1) / (Math.log(2) / 5730)) / HALF_LIFE_PERIOD));

};
