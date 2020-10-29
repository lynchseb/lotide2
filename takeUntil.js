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
const takeUntil = function(array, callback){
  let result = [];

    for(let index of array){
  
      if(callback(index)){
        return result;
      } 
      result.push(index)
    }
    return result;
  }


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log(results2);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results1, data1));
console.log(assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood' ]));
console.log(assertArraysEqual(results2, data2));

