//document.queryselector give first element of the tag
//use queryselector
let bodychild = document.querySelector("body");
console.log(bodychild.childnodes)//will give nodelist
console.log(bodychild.childern)// will give html collection

// let divwithclass =document.querySelector(".sample");
// console.log(divwithclass);

// let idelement = document.querySelector("#test")
// console.log(idelement)

// let inputtag = document.querySelector("input")
// console.log(inputtag)

// //innerhtm; => it returns all html element along with the same format
// let samplediv = document.querySelector(".sample")
// console.log(samplediv.innerHTML)
// //innnertexxt => it returns only the text of html element irrespective of its format

// //testconstent=> it returns text in same format as written in html element.
// console.log(samplediv.innertext)

// console.log(samplediv.textContent,"this is output for textcontent")

//how to access input box;
//Incase of input boxes innertest will not work to access the values inside
 //input boxesonly value method will work.
//let input = document.querySelector("input");
//console.log(input.value);

//dom manipulation => element, typeof event, action
//typeof event => click, hover, doubleclick,pressingof keys
//action => custom function which will get executed when event is triggered.

let divele = document.querySelector("div");

//addeventlistener
divele.addEventListener("click",hello)

function hello(e)
{
    //alert("hello world")
    //console.log("value of event",e)
    
    console.log("Trigger mouseout");
}

// divele.addEventListener("dblclick",test)
// function test ()
// {
//     alert("You have dbl clicke the div")
// }
//mouseover/mouseout, mouseout/mouseleave

divele.addEventListener("mouseover",test)

function test(){
    //console.log("overing on div")
    divele.style.background ="lightcoral"
   // divele.style.display = "none"
}
divele.addEventListener("mouseleave",()=>{
    //console.log("leave on div")
    //divele.style.background ="blueviolet"
})



// divele.addEventListener("mouseenter",()=>{
//     console.log("mouse enter on div")
// })
// divele.addEventListener("mouseout",() =>{
//     console.log("coming out of div")
//     })
function clickme(){
    console.log("it is getting clicked")
}
//mouseover =>test
//mouseout => hello
//click => clickme
let arr = ['mouseover','mouseout','click']

for(let i=0;i<arr.length;i++)
{
    if(arr[i]=='mouseover')
        divele.addEventListener(arr[i],test)
    else  if(arr[i]=='mouseout')
    divele.addEventListener(arr[i],hello)
    else  if(arr[i]=='click')
    divele.addEventListener(arr[i],clickme)
}





