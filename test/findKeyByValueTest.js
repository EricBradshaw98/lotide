const findKeyByValue = require('../findKeyByValue');


//assertequal defined  to verify actual and expected values
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected + '');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected + '');
  }
};
//contains genre info
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


//assertequal 
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);