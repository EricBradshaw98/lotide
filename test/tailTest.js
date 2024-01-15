
const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);


assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail(["test"]).length, 0);
assertEqual(tail([]).length, 0);