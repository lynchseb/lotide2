const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const [key, value] of Object.entries(obj1)) {
    if (value.length > 1) {
      if (!eqArrays(value, obj2[key])) {
        return false;
      }
    } else if (value !== obj2[key]) {
      return false;
      }
  } 
  return true;
};

module.exports = eqObjects;

// console.log(eqObjects({ b: "2", a: "1"}, { a: "1", b: "2" }));
// console.log(eqObjects({ b: "2", a: "1", c: "3"}, { a: "1", b: "2" }));
// console.log(eqObjects({ d: ["2", 3], c: "1" }, { c: "1", d: ["2", 3] }));
// assertEqual(eqObjects({ b: "2", a: "1"}, { a: "1", b: "2" }), true);
// assertEqual(eqObjects({ b: "2", a: "1", c: "3"}, { a: "1", b: "2" }), false);
// assertEqual(eqObjects({ b: "2", a: "1", c: "3"}, { a: "1", b: "2" }), true);
