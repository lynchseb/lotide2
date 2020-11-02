# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lynchseb/lotide2`

**Require it:**

`const _ = require('@lynchseb/lotide2');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `Head`: Takes in an array and returns the first index
* `Tail`: Takes in an array slices the first index and returns the rest
* `Middle`: Takes in an array and returns the middle index an odd array and the two middles indexes of an even array. 
* `Count Letters`: Returns value of occurences of most seen letter
* `Count Only`: Count only what is included in the perameters
* `Find Key`: Returns specified key from an object. 
* `Find Key by Value`: Returns key with the associated value
* `Letter Positions`: Returns index of the searched letter 
* `Map`: Creates a new array with the value at 0 index of each element in the given array
* `Take Until`: Returns values into the specific breakpoint value is met
* `Without`: Creates and returns a new array without the specified elements. 