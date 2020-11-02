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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  let results = [];
  for(let item of array){
    results.push(callback(item))
  }

  return results;
}

module.exports = map;


// const results1 = map(words, word => word[0]);



// console.log(results1);
// console.log(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]))
// console.log(eqArrays(results1, [ 'g', 'c', 't', 'm', 'f' ]))
// console.log(assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true));
// console.log(assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 'f' ]), false));