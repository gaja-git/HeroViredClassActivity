// sync and async of JS

// In Javascript , almost everything is object, excluding symbols,undefined, null and boolean.

// In Javascript, functions are called as first class objects.
// In Javascript functions can be storedin variable, or can be passed as an argument to anyother function
// In Javascript everything happens in a global execution context
//In Javascript the global execution context makes a global or window object/function which runs on callstack

//incase of nodejs runtime environment, global();
//incase of browser, window()
//Javascript is synchronous and single thread language
//single thread: it can only perform a single task at a time.
//synchronous: line by line








// function types
// named function
// function fuc(){

// }
// fun()

// Anonymous function = function with no name
// functional expression:function with no name of itself , when stored with help of something
// let a = function(a,b){
//     return a+b
// }
// console.log(a(a,b))

// arrow function
// let a = () =>{
//     return a+b;
// }
// console.log(a(1,2))

// IIFE =>immediately invoked functional expression
// Fetching API's
// (
//     (a,b)=>{

//     }
// )(2,3)

//sychronous behaviour
// console.log('start');
// function fun(a,b){
//     return a+b;
// }
// fun()
// console.log("end")
//global in nodejs , window in browser stored in call stack 
//global wraps each line of statement

//callback
//it is function which is given to another function as an argument and executed inside the other fucntion

// function fun(a,b,callback){
//     return callback(a,b)
// }

// function add(a,b){
//     return a+b
// }

// let a=func(2,3,add);
// console.log(a);

//Callback
// console.log("starting the code")
// const fs = require('fs')//require method is only used to require module
// fs.readFile("test.txt",'utf-8',(err,data)=>{
//     console.log(data,"data from file")
// })
//event loop = it identifies which is async behaviour and which sync;
//manages when to to call and show outputs of callback and promises
//console.log("at the end of file")

///Promises => this is also part of asynchronous behaviour

//states of promises:
//value is fullfilled => resolve;
//value is not fulfilled => reject;
//seacrhing value => pending

function add(a,b){
    return new Promise((resolve,reject)=>{
        let c=a+b;
        if(c>5){
            resolve(c)
        }else
        {
            reject("error:")
        }
    })
}

//.then and .catch
//.then(()=>{it handles resolve data})
//.catch(()=>{it handles rejected data})
add(4,2).then((data)=>console.log(data,"resolved data")).catch((err)=>console.log(err,"reject data"))

//async - await
(
    async()=>{
        try{
        let data = await add(2,4)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
)()

// const fs = require('fs')//require method is only used to require module
// fs.readFile("test.txt",'utf-8',(err,data)=>{
//     console.log(data,"data from file")
// })

function reader(){
    return new Promise((resolve,reject)=>{
        fs.readFile("test.txt",'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }else{data}
            })
    })
}

async function reader1(){
    return new Promise((resolve,reject)=>{
        fs.readFile("test1.txt",'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }else{data}
            })
    })
}

Promise.all([reader(),reader1()]).then((data)=>console.log(data))])