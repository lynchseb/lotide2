const assertArraysEqual = function(arr1, arr2) {
  let equal = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;
  let unequal = `🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`;
  if (eqArrays(arr1, arr2)) {
    return equal;

  } else return unequal;
};

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

const letterPositions = function(sentence) {
  const results = {};
  let currentIndex = 0;
  // console.log(sentence.length)
  for (let char of sentence) {
    if (char === " ") {

    } else if (results[char]) {
      results[char].push(currentIndex);
    } else {
      results[char] = [currentIndex];
    }
    currentIndex ++;
  //  console.log(char, currentIndex)
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));
console.log(assertArraysEqual(letterPositions("hello").l, [1]));