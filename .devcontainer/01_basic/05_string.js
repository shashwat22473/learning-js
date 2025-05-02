const name = "Shashwat"
const repoCount = 50

const gameName= 'marioKart'

// using string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const personName= new String('Shashwat')

console.log(personName[0])
console.log(personName.length)
console.log(personName.toUpperCase())


console.log(personName.charAt(2))

console.log(personName.indexOf('t'))

const newString= personName.substring(0,5)
console.log(newString)

const newStringOne="  Shekhar  "

console.log(newStringOne)
console.log(newStringOne.trim())

const url='https://Shashwat.com/Shashwat%20Shekhar'

console.log(url.replace('%20','-'))
console.log(url.includes('Shashwat'))

console.log(url.split('/'))