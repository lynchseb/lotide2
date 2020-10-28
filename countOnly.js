const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  } else if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  // console.log(itemsToCount)
  for (const item of allItems) {
  // console.log(item);
    if (itemsToCount[item]) {
    
      if (result[item]) {
        result[item] += 1;

      } else {
        result[item] = 1;
      }
    }
  }
  // console.log(result);
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
