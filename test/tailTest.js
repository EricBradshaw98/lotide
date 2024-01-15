
const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

console.log(tail(["a", "b", "c"]));
console.log(tail([]));
console.log(tail([42]));