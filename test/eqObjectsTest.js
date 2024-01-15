const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');


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