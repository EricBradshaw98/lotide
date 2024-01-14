const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // Fix variable names
  const keys2 = Object.keys(object2); // Fix variable names

  // Check if the number of keys in both objects is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if the values of each key are the same in both objects
  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If the value is an array, use the eqArrays function to compare
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // If the value is not an array, directly compare the values
      return false;
    }
  }

  // If all checks pass, the objects are considered equal
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

const eqArrays = function(actual, expected){
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected + '');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected + '');
  }

};

// Example usage of assertEqual with eqObjects
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);



// Test cases
assertEqual(eqArrays(eqObjects([multiColorShirtObject, longSleeveMultiColorShirtObject, 3], [1, 2, 3]), true)); // => should PASS
assertEqual(eqArrays(eqObjects([1, 2, 3], [3, 2, 1]), false)); // => should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS