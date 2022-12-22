// i = 7
// if(i>5){
//     console.log("Hello")
// }else if(i>3){
//     console.log("Bonjour")
// }else{
//     console.log("Namaste")
// }


// switch(expressions){
//     case a:
//         //code to do TextTrackList
//         break;
//     case b:
//         //  code
//         break;
//     default:
//         //code
// }

const today = new Date("2022-12-13")
console.log(today.getDay())
let myday = today.getDay()
switch(myday){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thrusday")
        break;        
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
}

// let var1 = "prashant"
// console.log(typeof today)

// var k = ''
// var p = Number(k)
// console.log(typeof k)
// console.log(p)

// console.log(Math.floor(2.4))
var flag=0
const arr = ["Renu", "Divya", "Medha", "Durga", "Shalini", "Riswana",  "Naga", "Vidhya"]
arr.forEach(newfun)
function newfun(value,indexing,comparray){
    if(value=="Divya"){
        console.log(value,indexing)
    }
}

arr.forEach(
    function fun(value){
        console.log(value)
    }
)
function fun(value){
    console.log(value)
}


// var rn = Math.floor(Math.random()*1000)%arr.length


// console.log(arr[rn])
// var num = 54.52343
// var n2 = 'Prashant'
// console.log(num.toFixed(2))