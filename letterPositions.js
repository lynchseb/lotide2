const letterPositions = function(sentence) {
  const results = {};
  let currentIndex = 0;
  for (let char of sentence) {
    if (char === " ") {

    } else if (results[char]) {
      results[char].push(currentIndex);
    } else {
      results[char] = [currentIndex];
    }
    currentIndex ++;
  }
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));
// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
// console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));
// console.log(assertArraysEqual(letterPositions("hello").l, [1]));