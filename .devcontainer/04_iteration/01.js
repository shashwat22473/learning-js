// for loop

for (let i=0; i<10;i++){
    // console.log(i)
}

// while loop
let a=0
while(a<10){
    // console.log(a)
    a++;
}


// forof loop

let arr=[1,2,3,4,5,6,7,8,9]

for (const element of arr) {
    // console.log(element)
}

// Maps
// they preserve the order in which keys are ordered
const map = new Map()

map.set(1,"Shashwat")
map.set(2,'rudy')
map.set(3,"benjimin")
map.set(4,'rudolph')

console.log(map)

map.set(1,'jim')

console.log(map)

for (const [key,value] of map) {
    console.log(key, value)
}

// for of loops do not work when we are mapping in an Object

// for looping an object use forin


const object ={
    1:"Shashwat",
    2:"Benjimin",
    3:"dominio"
}


// forin
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`The value of the key ${key} is ${element}`)
    }
}


arr =[ 2,3,4,6]

for (const key in arr) {
    console.log(key)
}
// we see here that in forin loop the key that we get is the index.


// forin loop does not work on  a map

// foreach

arr.forEach(element => {
    console.log(element**0.5)
});


function ding(params) {
    console.log(params*5)
    
}

arr.forEach(ding)


// forEach has the access to the following 

arr.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})


// filter-> tell the elements in the array that satisfy the callback function


const nums=[1,2,3,4,5]

let list = nums.filter((element) =>{
    if (element>2)return true
    else  return false
})

console.log(list)


const nuum=[1,2,3,4,5,6,7,8,9,10]
const  newnuums=nuum.map((ele => {return ele+10}))

console.log(newnuums)


// chaining , this is just applying multiple filters and map in succession , just to look cool

const arrayy= newnuums.map(ele=>{return ele*10})
                    .map(ele=>{return ele+4})
                    .filter((ele)=>ele>45)

console.log(arrayy)
