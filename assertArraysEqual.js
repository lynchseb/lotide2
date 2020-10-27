const eqArrays = function(array1, array2){
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
    // console.log(array1[i], array2[i])
    if (array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
  
}

const assertArraysEqual = function(arr1, arr2){
  let equal = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;
  let unequal = `🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`;
  if(eqArrays(arr1, arr2)){
    return equal;
  } else return unequal;
}

console.log(assertArraysEqual(['hi', 2, 3], ['hi', 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "5"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false