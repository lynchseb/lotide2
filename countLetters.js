const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  } else if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }
};

const countLetters = function(words) {
  let result = {};
  let trimWords = words.split(' ').join('');
  // console.log(trimWords)
  for (let letter of trimWords) {
    // console.log(letter)
    if (result[letter]) {
      result[letter] += 1;

    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
// console.log(typeof " ", typeof "a")

// for(let letter of words){
//   if(letter === " "){

//   } else if (result[letter]){
//     result[letter] += 1;

//   } else (result[letter]){
//     result[letter] += 1;
//   }
// }