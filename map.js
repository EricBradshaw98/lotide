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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(results1, ['g', 'c', 't', 'm', 't']);
