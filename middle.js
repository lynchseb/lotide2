const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let result = [];
  if (array.length < 3) {
    return result;

  } else if (array.length % 2 !== 0) {
    result.push((array.length - 1) / 2  + 1);
    
  } else {
    result.push(array.length / 2, array.length / 2 + 1);
    // result.push(array.length / 2 + 1);  
  }
  
  return result;
  
};

module.exports = middle;

