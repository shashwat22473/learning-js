const myArr=[1,2,3,4.8,"Shashwat"]

console.log(typeof myArr)
console.log(myArr['haha']);
console.log(myArr['2'])

myArr['8'] = 'brute'

console.log(myArr.length)
console.log(myArr)


const arr2= new Array(1,2,3,4)
console.log(arr2)

// push
arr2.push(8)
console.log(arr2)

// pop 
arr2.pop()
console.log(arr2)

// unshift 

arr2.unshift(-1)
console.log(arr2)

// shift

arr2.shift()
arr2.shift()

console.log(arr2)

// include

console.log(arr2.includes(8))

// index

console.log(arr2.indexOf(2))
console.log(arr2.indexOf(6))

// join -> takes all the values in the arr and then make a string of them by joining them on ','
console.log(arr2.join())
console.log(typeof (arr2.join()))

// slice, splice

// there are 2 difference  between them 

// first slice does not incliud the last element of the range whereas the splice does
// second splice removes the part from the array that you splice, whereas slice doesn't

const arr1=new Array(1,2,3,4,5)

console.log(arr1)

const sliced_arr=arr1.slice(0,3)
console.log(sliced_arr)

console.log(arr1)

const  spliced_arr= arr1.splice(1,2)
console.log(spliced_arr)
console.log(arr1)

