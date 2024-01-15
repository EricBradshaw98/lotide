
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
