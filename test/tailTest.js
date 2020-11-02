const tail = require('../tail')


console.log(tail(["Yo Yo", "Lighthouse", "Labs"])); // test using an array with values
console.log(tail([])); // test using an empty array
console.log(tail(["hello"])); // test using an array with 1 value
