const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

const subThreeArray = [1, 2];
const oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(assertArraysEqual(middle(subThreeArray), []));
console.log(assertArraysEqual(middle(oddArray), [5]));
console.log(assertArraysEqual(middle(evenArray), [4, 5]));
console.log(assertArraysEqual(middle(evenArray), [4, 5, 6]));