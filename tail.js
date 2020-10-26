const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  } else if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
};

const tail = function(array) {
  let headlessArray = array.slice(1);
  return headlessArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const emptyArray = [];
const singleArray = ["hello"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(tail(emptyArray));
console.log(tail(singleArray));
assertEqual(words.length, 3); // original array should still have 3 elements!


