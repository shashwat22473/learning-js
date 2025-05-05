const user = {
    name: 'Shashwat',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name} , welcome to website`)
        console.log(this);
    }
}

user.welcomeMessage()
user.name="Sam";
user.welcomeMessage()


// console.log(this) <--this will be empty


function chai(){
    // this gives something crazy , this keyword has something really meaningful attached to it.
    console.log(this)
}
chai()


const chai1=function(){
    let username="hitesh";
    console.log(this.username);
}
chai1()


// Arrow functions- just a simple way to define a function.

const chai2= ()=>{
    let username="Shashwat";
    console.log(this);
}
chai2()

// we can use this function insider an arrow functions.but it is empty.

const addtwo=(num1,num2)=>{
    return num1+num2;
}

console.log(addtwo(2,3))

// arrow function implicitly assumes  return, so if we shift all the code for the funtion on one line , then:

const addthree = (num1,num2,num3) => num1+num2+num3
// this is a valid syntax, will return sum of the three numbers.
// you can do this or wrap num1+num2+num3 in () .
// if we define scope by {} in the funtion then we will need to write return . 
console.log(addthree(1,2,3))






