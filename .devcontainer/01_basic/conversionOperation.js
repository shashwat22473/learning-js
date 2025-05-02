"use-strict";

let score="33"
console.log(typeof score) 


let valueInNumber = Number(score)
console.log(typeof valueInNumber) 
console.log(valueInNumber) // this will show that this is 33
// but

let score1='33erf'
let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1) // this will give NaN result


let score2=null
let valueInNumber2=Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2) // null value when converted to a number gives 0 value


let score3=undefined
let valueInNumber3=Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3) // this will also give NaN value


// similarly true -> 1 , false ->0

let isLoggedIn = -1
let booleanIsLoggedIn= Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

/*
    any non zero number get's true
    any non empty string get's true
*/



let number1=33
let stringNumber1=String(number1)
console.log(stringNumber1)

let number2=null
console.log(String(number2))

let number3;
console.log(String(number3))
