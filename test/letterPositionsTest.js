const letterPositions = require('../letterPositions');

// assert equal to test if it matches
const assertArraysEqual = require('../assertArraysEqual');

// Test cases for string hello
const results = letterPositions("hello");

assertArraysEqual(results['h'], [0]);
assertArraysEqual(results['e'], [1]);
assertArraysEqual(results['l'], [2, 3]);
assertArraysEqual(results['o'], [4]);