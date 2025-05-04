// two ways of defining objects, literal and then constructor

// object literal
const mySym = Symbol('Key1')

const JsUser = {
    name: "Shashwat",
    age: 19,
    location: "Delhi",
    [mySym]: 'symbol1',
    isLoggedIn: false,
    lastloggedinDays:["Monday","Saturday"]
}
// the keys are kept in track as a string , when we ask for attribute using the dot method, we don't need to write in inverted comma

console.log(JsUser.age)
console.log(JsUser["age"])


// really interesting

/*
even though making key- sym , it feels that we are using a symbol for the key of our object , but in actuality this doesn't work
for mySym to work as a symbol we have to define the key as [mySym] and also while refering to the object use object[mySym]
 */


JsUser.email='shekharbaby.com'
console.log(JsUser.email)



// we can freeze an object so that no changes can be made to the object, although there won't be any error if we do so , but the changes won't propogate
Object.freeze(JsUser)

JsUser.email= 'hahahua.com'

console.log(JsUser)


const JsUser2 = {
    name: "Shashwat",
    age: 19,
    location: "Delhi",
    [mySym]: 'symbol1',
    isLoggedIn: false,
    lastloggedinDays:["Monday","Saturday"]
}


JsUser2.greating=function(){
    console.log("Hello Sir");
}

console.log(JsUser2.greating())

JsUser2.greatingTwo=function(){
    console.log(`Hello ${this.name} Sir`);

}


console.log(JsUser2.greatingTwo())