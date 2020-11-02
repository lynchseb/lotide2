const countLetters = function(words) {
  let result = {};
  let trimWords = words.split(' ').join('');
  for (let letter of trimWords) {
    if (result[letter]) {
      result[letter] += 1;

    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
