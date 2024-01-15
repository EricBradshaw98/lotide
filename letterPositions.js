
// eqArrays
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};
//  letterpositions function 
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase();

    if (char !== ' ') {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }

  return results;
};
module.exports = letterPositions;
// assert equal to test if it matches
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// Test cases for string hello
const results = letterPositions("hello");

assertArraysEqual(results['h'], [0]);
assertArraysEqual(results['e'], [1]);
assertArraysEqual(results['l'], [2, 3]);
assertArraysEqual(results['o'], [4]);