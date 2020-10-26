const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  } else if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
};

const head = function(array) {
  if (array.length < 0) {
    return undefined;
  }
  return array[0];

};

assertEqual(head([5,6,7]), 5);
assertEqual(head([5.5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "hello");
// console.log(head(['hello', 'there']))
// console.log(head([5]))