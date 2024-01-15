
//add another const for assertArraysEqual

const eqArrays = require('./eqArrays');

// Function to assert whether two arrays are equal and print a message
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
module.exports = assertArraysEqual;
