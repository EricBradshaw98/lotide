const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');
const result = countLetters('LHL');
const expectedOutput = { L: 2, H: 1 };

assertEqual(JSON.stringify(result), JSON.stringify(expectedOutput));