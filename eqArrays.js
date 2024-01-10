const eqArrays = function(actual, expected) {

  //original was checking for specific object, now check if length is equal
  if (actual.length !== expected.length) {
    
    return false;
  }
// loop each item in the array, check if not equal
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      
      return false;
    }
  }
//otherwise pass if actual is equal to expected
  
  return true
};

// check whether equal and print message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS