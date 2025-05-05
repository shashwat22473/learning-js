let a = 10
const b = 20
var c =30

/*
There are two of scopes global scopes and block scope . Global scope should be allowed in 
block scope but the block scope should not be appearing in the global level.
This is why we do not use Var , what this does is that it will give the variable declared using var the ability to mess with the global scope .
This is the reason why do not use Var to define Variable and use let
*/


if (true){
    let a=100;
    console.log(`Inner a - ${a}`)
}

console.log(`Outer a - ${a}`)


// Nested scope

function one (){
    const username='Shashwat'

    function two(){
        const website='youtube'
        console.log(username)
    }
    // console.log(website) 
    // This will lead to error
    two()
}
one()

// in nesting the child is able to get the variables of the parent but not the vice versa.
// this works for functions inside of a function , loop inside of a loop and if statement inside of another if statement.



// +++++++++++++++++++++++++++ interesting +++++++++++++++++++++
addDone(5)

function addDone(num){
    return num+1;
}

const addTwo = function(num){
    return num+2 ;
}

addTwo(5)

/*
    Here this type of code will run without an error.
    The reason for this is Hoisting.
    But if we put addTwo() above variable addTwo then it will throw an error.
    This is just one of those things called Hoisting , we will learn about it latter.
*/
