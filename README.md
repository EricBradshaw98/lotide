# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hbghost/lotide`

**Require it:**

`const _ = require('@hbghost/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


 `head,` : first item in array
  `tail,` : all except first item
  `middle,` : middle 1 or 2 items
  `assertArraysEqual,` : verify actual is equal to expected (array)
  `assertEqual,` : verify actual is equal to expected
  `eqArrays,` : verify actual is equal to expected
  `assertObjectsEqual,` : verify actual is equal to expected(object)
  `countLetters,` : count # of letters in a given expression
  `countOnly,`: count only the items given in a list
  `eqObjects,` : compares the keys of each object and compares if they're equal
  `findKey,` : finds a given key in an object and verifies
  `findKeyByValue,` : checks within the object for a given value and returns if a match is found
  `letterPositions,` : which position a letter is in a given string
  `takeUntil,` : a function that returns a truthy value when a certain condition is met
  `without,`: remove unwanted elements from an array