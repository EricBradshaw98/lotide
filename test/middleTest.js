const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');




// Test cases 
middle([1, 2, 3]), [2]; // Odd 
middle([1, 2, 3, 4]), [2, 3]; // Even 
middle(["a", "b", "c"]), ["b"]; // Odd 
middle(["a", "b", "c", "d"]), ["b", "c"]; // Even 