const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2){
  let equal = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;
  let unequal = `🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`;
  if(eqArrays(arr1, arr2)){
    return equal;
  } else return unequal;
}

module.exports = assertArraysEqual;
