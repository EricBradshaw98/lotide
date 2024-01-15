const assertObjectsEqual = require('../assertObjectsEqual');



//arrays
assertObjectsEqual([1, 2, 3], [1, 2, 3]);
assertObjectsEqual([1, 2, 3], [3, 2, 1]);

// cases with objects
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }); // should pass: objects are equal

assertObjectsEqual({ x: 1, y: 2 }, { x: 1, y: 2, z: 3 });