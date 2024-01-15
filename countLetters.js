const countLetters = function(sentence) {
  const letterCount = {};



  // Count letters
  for (const char of sentence) {
    if (letterCount[char]) {
      letterCount[char]++;
    } else {
      letterCount[char] = 1;
    }
  }

  return letterCount;
};

//assert equal to verify
const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected + '');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected + '');
  }


};
module.exports = countLetters;
// Example
