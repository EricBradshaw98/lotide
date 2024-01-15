const assertArraysEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays');




// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]), true; 
assertArraysEqual([1, 2, 3], [3, 2, 1]), false; 

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true; 
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false;