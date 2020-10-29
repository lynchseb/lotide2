const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  } else if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
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


const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  //Extract keys from both objects and compares their lengths
  for (const [key, value] of Object.entries(obj1)) {
  //Loop through [key, value] of obj1
    if (value.length > 1) {
  //Check if the value of a key is greater than 1 i.e. if its an array
      if (!eqArrays(value, obj2[key])) {
        return false;
      }
  //If the value is an array it sends that value, with the equivalent value from obj2 at the same key, to eqArrays to determine if the arrays are equal.
    } else if (value !== obj2[key]) {
      return false;
      }
  //If the value is not an array it is compared to the equivalent value from obj2 at the same key.    
  } 
  //Loop ends and therefore the objects are equivalent. 
  return true;
};


console.log(eqObjects({ b: "2", a: "1"}, { a: "1", b: "2" }));
console.log(eqObjects({ b: "2", a: "1", c: "3"}, { a: "1", b: "2" }));
console.log(eqObjects({ d: ["2", 3], c: "1" }, { c: "1", d: ["2", 3] }));
assertEqual(eqObjects({ b: "2", a: "1"}, { a: "1", b: "2" }), true);
assertEqual(eqObjects({ b: "2", a: "1", c: "3"}, { a: "1", b: "2" }), false);
assertEqual(eqObjects({ b: "2", a: "1", c: "3"}, { a: "1", b: "2" }), true);
