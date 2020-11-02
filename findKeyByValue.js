const findKeyByValue = function(shows, show){
  for (const [key, value] of Object.entries(shows)){
    if(show === value){
      return key;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");