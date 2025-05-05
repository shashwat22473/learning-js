const tinderUser=new Object()

tinderUser.id='123abc'
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sammy",
            lastName:"Shekhar"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)


// Optional chaining  ?-> access the property of an object and then accesses the presence of the property, if the property is not present then returns undefined rather than throwing an error

console.log(regularUser.fullname?.userfullname.firstname)
console.log(regularUser.haha?.firstname)


const obj1={1:'Haha',2:"JJ"}
const obj2={3:"bruh", 4:"niakl"}


/*
the way we merge two or more objects is using assign function of Object
the first parameter is the holder where we want to merge all the objects
 */

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

// or do this

const obj4= {...obj1, ...obj2}

console.log(obj4)



console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


// hasOwnProperty tells whether the method has this property or not
console.log(tinderUser.hasOwnProperty('DOB'))