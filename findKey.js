const findKey = function(object, callBack) {
  for (let entry of Object.entries(object)) {
    if (callBack(entry[1])) {
      return entry[0];
    }
  }
};

module.exports = findKey;

// let test = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// assertEqual(test, "noma");
// assertEqual(test, "Akaleri");
