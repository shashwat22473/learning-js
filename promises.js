// const promiseOne = new Promise(function(resolve,reject){
//     // Do async task
//     // DB calls,networks,crytography
//     setTimeout(()=>{
//         console.log("Async task completed")
//     },1000)
//     resolve()
//     reject()

// }) 

// promiseOne.then(()=>{
//     console.log('Promise consumed')

// },()=>{

//     console.log("promise rejected")
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("async task 2")
//         resolve()

//     },1000)
// },1000).then(()=>{
//     console.log("Async 2 resolved")
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Shashwat", email:"Shashwat22473@iiitd.ac.in"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error){
//             resolve({username:"Shashwat", age:21})
//         }
//         else{

//             reject('Fuck you man!')
//         }
//     })
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{console.log("kuch toh ho gya bhai")})


// const promiseFive= new Promise((resolve,reject)=>{
//         setTimeout(function(){
//         let error = true
//         if (!error){
//             resolve({username:"Shashwat", age:21})
//         }
//         else{

//             reject('Fuck you man!')
//         }
//     },50000)
// })


// async function consumePromiseFive(){
//     try{
//         const data= await promiseFive
//         console.log(data.username)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }
// consumePromiseFive()


async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }

}

getAllUsers()

console.log("black monkey")
