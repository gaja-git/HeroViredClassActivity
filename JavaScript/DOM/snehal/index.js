// let samplediv =document.querySelector(".sample");
// console.log(samplediv.innerHTML,"THIS IS OUPUT FOR INNERHTML")

// //innerHTML => it returns all the html element along with the text return
// // in the same format

// //innertext => it returns only the text of html element irrespective of tis format.

// //textcontent => it returns text in the same format as written in html element.
// console.log(samplediv.innerText,"THIS IS OUTPUT FOR INNERTEXT");

// console.log(samplediv.textContent,"THIS IS OUTPUT FOR TEXTCONTENT")



// how to access input box ;
// In case of input boxes innertext will not work to access the values written inside the input box.
//only .value method will work;
// let input = document.querySelector("input");
// console.log(input.value)

//dom manipulation => element, typeofevent ,action
//typeof event => click,hover,doubleclick,pressing of keys;
//action => custom function which will get executed when event is triggered.

let divele = document.querySelector("div");

//addeventListener;

// divele.addEventListener('dblclick',test);

// function test (){
//     alert("YOU HAVE DBL CLICKED THE DIV")
// }
// divele.addEventListener('click',hello);

// function hello(e){
//     alert("hello world")
//     // console.log("VALUE OF EVENT :",e)
// }


// mouseover/mouseout  ,mouseenter/mouseleave
// mouseenter /mouseleave do not have have event bubbling phase.

// divele.addEventListener("mouseenter",test)

// function test(){
//     console.log("entering in div")
// }

// divele.addEventListener('mouseleave',()=>{
//     console.log("coming out of div")
// })

// divele.addEventListener('mouseover',()=>{
//     divele.style.display="none"
// })

// divele.addEventListener("mouseout",()=>{
//     divele.style.display="block"
// })