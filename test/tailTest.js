const tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", () => {
  it("removes index 0 and returns remainder of array", () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), result);
  });

  it("returns undefined for an empty []", () => {
    const result = tail([])
    assert.deepEqual(tail([]), result); 
  });
});

