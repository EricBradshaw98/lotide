// compare arrays for equality
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

// assert whether two arrays are equal and print a message
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// function without to return a new array without unwanted elements
const without = function(source, itemsToRemove) {
  let result = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

// Test cases
//test without 2 and 3
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

// test with numbers and strings
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// test if array is modified
const originalArray = [1, 2, 3, 4, 5];
const itemsToRemoveArray = [2, 4];
const resultArray = without(originalArray, itemsToRemoveArray);
assertArraysEqual(originalArray, [1, 2, 3, 4, 5]); // should remain unchanged