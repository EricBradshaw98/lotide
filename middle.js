// Function to find the middle elements of an array
function middle(array) {
  const length = array.length;

  if (length <= 2) {
    return []; // Return an empty array for arrays with one or two elements
  }

  if (length % 2 === 1) {
    // For arrays with odd number of elements, return a single middle element
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  } else {
    // For arrays with even number of elements, return two middle elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [array[middleIndex1], array[middleIndex2]];
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

// Test cases including the middle function
assertArraysEqual(middle([1, 2, 3]), [2]); // Odd number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Even number of elements
assertArraysEqual(middle(["a", "b", "c"]), ["b"]); // Odd number of elements
assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]); // Even number of elements
