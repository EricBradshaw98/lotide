const middle = require('../middle');





// Test cases 
//  assertArraysEqual(middle([1, 2, 3]), [2]); // Odd 
//  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Even 
//  assertArraysEqual(middle(["a", "b", "c"]), ["b"]); // Odd 
//  assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]); // Even 
const assert = require('chai').assert;

 describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns 2,3 for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
  
  it("returns [b] for [a, b, c]", () => {
    assert.deepEqual(middle(["a", "b", "c"]), ["b"]); 
  });

  it("returns [b, c] for [a, b, c, d]", () => {
    assert.deepEqual(middle(["a", "b", "c", "d"]), ["b", "c"]); 
  });




});