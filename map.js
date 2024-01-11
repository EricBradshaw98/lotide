//take two arguments
//an array to mapo
//a call back

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  //temp code
  

  const results = [];
  for (let item of array) {
    
    results.push(callback(item));
  }
  
  return results;

}

const results1 = map(words, word => word[0]);
console.log(results1);


const eqArrays = function(actual, expected) {

  //original was checking for specific object, now check if length is equal
  if (actual.length !== expected.length) {
    
    return false;
  }
// loop each item in the array, check if not equal
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      
      return false;
    }
  }
//otherwise pass if actual is equal to expected
  
  return true
};
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
