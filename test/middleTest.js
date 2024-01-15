const middle = require('../middle');
const assertArraysEqual = require("../assertArraysEqual");




// Test cases 
 assertArraysEqual(middle([1, 2, 3]), [2]); // Odd 
 assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Even 
 assertArraysEqual(middle(["a", "b", "c"]), ["b"]); // Odd 
 assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]); // Even 
