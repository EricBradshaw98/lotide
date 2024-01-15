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

const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected + '');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected + '');
  }
};
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
module.exports = eqObjects;
//test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };


eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject, true)); // => true

eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject, false)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false