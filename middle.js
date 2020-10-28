const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // console.log(array1[i], array2[i])
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  
};

const assertArraysEqual = function(actual, expected) {
  let equal = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  let unequal = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected)) {
    return equal;
  } else return unequal;
};

const subThreeArray = [1, 2];
const oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = [1, 2, 3, 4, 5, 6, 7, 8];

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

console.log(assertArraysEqual(middle(subThreeArray), []));
console.log(assertArraysEqual(middle(oddArray), [5]));
console.log(assertArraysEqual(middle(evenArray), [4, 5]));
console.log(assertArraysEqual(middle(evenArray), [4, 5, 6]));
