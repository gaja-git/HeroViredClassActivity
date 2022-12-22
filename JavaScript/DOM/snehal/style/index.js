let clickemebtn = document.querySelector(".clickme");
let mainModal =document.querySelector(".main-modal");
let cancelbtn =document.querySelector(".cancel");
console.log(clickemebtn);
console.log(mainModal);
console.log(cancelbtn);

clickemebtn.addEventListener('click',()=>{
    mainModal.style.display="flex";
})

cancelbtn.addEventListener("click",()=>{
    mainModal.style.display="none"
})