const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  let equal = `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let unequal = `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if(eqObjects(actual, expected)){
    return equal;
  } else return unequal;
};

module.exports = assertObjectsEqual;

// console.log(assertObjectsEqual({ b: "2", a: "1"}, { a: "1", b: "2" }))
// console.log(assertObjectsEqual({ b: "2", a: "1", d: "4"}, { d: "4", a: "1", b: "2" }))
// console.log(assertObjectsEqual({ b: "2", a: "1"}, { a: "1", b: "2", c: "3" }))
// console.log(assertObjectsEqual({ b: "2", a: "1"}, { a: "1", b: "2", c: "3" }))

// console.log(eqObjects({a:1,b:[1,2,3],c:{x:[1,2,3]}},{a:1,b:[1,2,3],c:{x:[1,2,3]}}));