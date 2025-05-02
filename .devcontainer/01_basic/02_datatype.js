"use strict";

// alert(3+3) this is wrong, this only works in the browser.

let name = 'Shashwat'
let age = 23
let isLoggedIn = true


// number => 2^^53
// bigint
// string => ""
// boolean => true/false
// null => empty value
// undefined => variable declared but not assigned
// symbol => unique value
// object =>


console.log(typeof name)
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof null) // null is an object
console.log(typeof undefined) // undefined is undefined 
console.log(typeof BigInt(123)) // bigint
console.log(typeof Symbol('123')) // symbol
console.log(typeof {name: 'Shashwat', age: 23}) // object
console.log(typeof [1,2,3]) // array is an object