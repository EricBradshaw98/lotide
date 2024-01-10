const eqArrays = function(actual, expected) {

  //original was checking for specific object, now check if length is equal
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
// loop each item in the array, check if not equal
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
//otherwise pass if actual is equal to expected
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// Test cases
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false


(eqArrays([4, 2, 3], [1, 2, 7]), true); // => should FAIL
(eqArrays([4, 5, 6], [4, 5, 6]), true); // => should PASS
(eqArrays(["1", "2", 3], [1, 2, 3]), true); // => should FAIL