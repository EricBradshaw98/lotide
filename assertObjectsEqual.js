
//eqobjects to check length then loop through keys
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // Use eqArrays for array comparison
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // Compare values for non-array keys
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};
//arrays
assertObjectsEqual([1, 2, 3], [1, 2, 3]);
assertObjectsEqual([1, 2, 3], [3, 2, 1]);

// cases with objects
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }); // should pass: objects are equal

assertObjectsEqual({ x: 1, y: 2 }, { x: 1, y: 2, z: 3 });

