const countLetters = function(sentence){
const letterCount = {};

  // Remove non-alphabetic characters and convert to lowercase
  const cleanSentence = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase();


 

  // Count the occurrence of each letter
  for (const char of cleanSentence) {
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

// Example usage
const result = countLetters('LHL');
const expectedOutput = { l: 2, h: 1 };

assertEqual(JSON.stringify(result), JSON.stringify(expectedOutput));