
const tail = require('../tail');



// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);


// assertEqual(tail(words)[0], "Lighthouse");
// assertEqual(tail(words).length, words.length - 1);
// assertEqual(tail(["test"]).length, 0);
// assertEqual(tail([]).length, 0);

const assert = require('chai').assert;


describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]),  [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});