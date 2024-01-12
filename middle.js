// Find the middle elements of an array
function middle(array) {
  const length = array.length;

  if (length <= 2) {
    return []; // Return an empty array for arrays with one or two elements
  }

  if (length % 2 === 1) {
    // odd number of elements,  single middle element
    const middleI = Math.floor(length / 2);
    return [array[middleI]];
  } else {
    // even number of elements,  two middle elements
    const middleI1 = length / 2 - 1;
    const middleI2 = length / 2;
    return [array[middleI1], array[middleI2]];
  }
}

// Function to check if two arrays are equal
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

// Function to assert whether two arrays are equal and print a message
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// Test cases 
assertArraysEqual(middle([1, 2, 3]), [2]); // Odd 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Even 
assertArraysEqual(middle(["a", "b", "c"]), ["b"]); // Odd 
assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]); // Even 
