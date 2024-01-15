const takeUntil = function(array, callback) {
// ...
const result = [];
for (const element of array) {
  if (callback(element)) {
    break;
  }
  result.push(element);
}
return result;


};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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
  
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  const results2 = eqArrays(arr1, arr2);
  if (results2) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
module.exports = takeUntil;
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);