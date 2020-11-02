const assertEqual = require('./assertEqual')

const tail = function(array) {
  if(array.length === 1){
    return [array[0]]
  } else {
    let headlessArray = array.slice(1);
    return headlessArray;
  }
};

module.exports = tail



