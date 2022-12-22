
//var can be redeclared and reinitialised
var a = 10;
var  a= 12;

//let cannot be redeclared and but can reinitialised
let b = 5;
b=10;

//let cannot be redeclared and reinitialised
const c = 10;

//question
//push,pop,shift and unshift
//push => appending the value at end
//pop => remove elememt from last index
let arr=[1,2,3];
arr.push(4);
//console.log(arr)
arr.pop();
//console.log(arr)
//unshift = add element at start of array
//shift = remove element from start of array
arr.unshift(4); 
//console.log(arr)
arr.shift();
//console.log(arr)

//q1
let array = [1,2,2,2,2,3,4,4,5,5]
console.log(array)
//Find the duplicate element in array
let dupNums = new Map()
for(let i = 0; i< array.length-1;i++)
{
   
    if(array[i] == array[i+1])
      {
        
        if(!dupNums.has(array[i]))
         {
            dupNums.set(array[i],2)
           
         }
        else 
        {           
            var value = dupNums.get(array[i])
            dupNums.set(array[i], value+1)
        }
             
      }  
}

var txt = ""
for (const x of dupNums.entries()) {
    txt += x + "/n";
  }
console.log(txt);

//find the duplicate and frequency of duplicate lelement in array



let obj ={
    name:"test",
    age:12,
    quantity:20,
}

for(let key in obj){
    //console.log("key:",key,"Value:",obj[key])
    if(key !== "color"){
        obj.color = "red"
    }
}
//console.log(obj);

//delete only for obj
delete obj['age'];
console.log(obj);
//play with obj

let empObj =[
  {
    id:"1001",
    emp_info:
    {
      name:"Aplha",
      dept:"Finance",
      Age:"42",
      salary:"40000"
    },    
  },
  {
  id:"1002",
    emp_info:
    {
      name:"Beta",
      dept:"Admin",
      Age:"52",
      salary:"50000"
    },
  },
  {
    id:"1003",
      emp_info:
      {
        name:"Gama",
        dept:"Sales",
        Age:"39",
        salary:"60000"
      },
    }

]

function displayAllemploy()
{
  empObj.forEach(ele =>{
    console.log(ele.emp_info)
  })
}

function getEmployee(empid)
{
  empObj.forEach(ele =>{
    if(ele.id == empid)
    {
      console.log(ele.emp_info)
    }
  })
}
let newEmp ={
  id:"1004",
  emp_info:{
  name:"Delta",
      name:"Delta",
      dept:"Business",
      Age:"52",
      salary:"80000",}}
addNewEmploy(newEmp)
{
  newid ="1004"
  empObj.push()  

}

getEmployee("1003")
displayAllemploy()
