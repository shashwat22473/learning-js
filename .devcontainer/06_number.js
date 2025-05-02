const num1=400

const num2 = new Number(400)

// console.log(num1)
// console.log(num2)

// the number of method for a Number is very less as compared to String. But we can convert number to  a string and then apply string methods


const haha=num2.toString()
// console.log(haha.length)


const otherNumber = 23.3243243
// console.log(otherNumber.toPrecision(3))

const hundereds = 10000

// toLocaleString convert the number to a format with commas for better readability.
// console.log(hundereds.toLocaleString("en-IN"));

// here "en-IN" what it does is that 



// console.log(Math.abs(-5))
// console.log(Math.round(4.0005))
// console.log(Math.ceil(4.7))
// console.log(Math.floor(4.7))
console.log(Math.random())
const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min + 1 ))+min))