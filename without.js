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

const assertArraysEqual = function(actual, expected){
  let equal = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  let unequal = `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  if(eqArrays(actual, expected)){
    return equal;
  } else return unequal;
}

const without = function(sourceArray, removalItems){
  let newArray = [];

  // sourceArray.forEach(value => {
  //   if(removalItems.indexOf(value) === -1){
  //     newArray.push(value)
  //   }
  // });
  // return newArray;

  // for (let i = 0; i < sourceArray.length; i++){
  //   // console.log(i, sourceArray[i], removalItems[i])
  //   if (removalItems.indexOf(sourceArray[i]) === -1){
  //     newArray.push(sourceArray[i])
  //   }
  // }
  // return newArray;

  for (let value of sourceArray){
    if (removalItems.indexOf(value) === -1){
      newArray.push(value)
    }
  }
  return newArray;
}

console.log(assertArraysEqual(without(["1", "2", "3"], ["1"]), ["2", "3"]))
console.log(assertArraysEqual(without(["1", "2", "3"], [""]), ["1", "2", "3"]))
console.log(assertArraysEqual(without(["1", "2", "3"], ["1", "3"]), ["2"]))

