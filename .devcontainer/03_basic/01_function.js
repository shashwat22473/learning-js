// just basics you already knew it.

function loginUserMessage(username){
    if (username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shashwat"))

// rest operator 

function calculateCarePrice(num1){
    return num1
}
console.log(calculateCarePrice(100,1000,10000));
// we will see in this case the function only consider the first argument

// rest operator helps us to consider all the argument in one


function calculateCarePrice2(...num1){
    return num1
}


console.log(calculateCarePrice2(100,1000,10000));
// rest operator takes the values that are not positionally defined in the argumnets


// example

function calculateCarePrice3(num1,num2,...num3){
    return num3
}

console.log(calculateCarePrice3(100,1000,10000));

// this function is simple , just make sure that you  can pass the objects and array the similar way.
