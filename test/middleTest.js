const middle = require('../middle')
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns empty array if array.length < 3", () => {
    const result = middle([1, 2])
    assert.deepEqual(middle([1, 2]), result);
  });

  it("returns the middle index of an odd numbered array.length", () => {
    const result = middle([1, 2, 3, 4, 5])
    assert.deepEqual(middle([1, 2, 3, 4, 5]), result); 
  });

  it("returns the middle two indexes of an even numbered array.length", () => {
    const result = middle([1, 2, 3, 4, 5, 6])
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), result);
  });
});
