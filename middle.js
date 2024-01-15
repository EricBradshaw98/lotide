// Find the middle elements of an array
const middle = function(array) {
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

module.exports = middle;





