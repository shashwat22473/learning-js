let date= new Date()

console.log(date.toDateString())

console.log(date.toISOString())

console.log(date.toLocaleDateString())

console.log(date.toLocaleString())

console.log(date.toLocaleTimeString())

console.log(typeof date)


let myCreatedDate = new Date(2025,9 , 11)
// in the above constructor remember that the month starts from 0 index
console.log(myCreatedDate.toDateString())


let date2 = new Date(2025,9,11,8,34)
console.log(date2.toLocaleString())

let date3= new Date("12-04-2025") // specify the format aswell
console.log(date3.toLocaleString())


let customDate=  Date.now()
// this returns the time in millisecond from one standard time
console.log(customDate)

console.log(Math.round(customDate/1000))
// this is the time in seconds from the standard
