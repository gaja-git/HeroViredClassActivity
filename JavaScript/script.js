console.log("this is from script.js")

let r = 6.8 //(p.a)
//t = will be numbr of months


function SimpleInterest(p,t){
    let tYear = t/12
    let simpleInt 
    simpleInt = p * tYear * 6.8 /100
   
    return simpleInt
}
let p= 2000
let t= 45
function calculate(p,t){
    let simpI = SimpleInterest(p,t)
    TotalAmt = p + simpI
    console.log("SimpleInterest",simpI)
    console.log("Total Amount",TotalAmt)
}

const arr = ["APPle","Mango","Orange"]
const per1 = {
    fname: "firstName",
    lname: "lastName",
    rollnum:24
    }
const per2 = {
    fname: "firstName",
    lname: "lastName",
    rollnum:24,
    fullName:function(){
        return this.fname + " " + this.lname
    }
}

const date = new Date('2022-12-13')
//console.log(per1.fname)
//console.log(per2.fullName)
//console.log(arr[1])

const sports = new Array("cricket","football","tennis")
//console.log(sports[2])
 const students = [
    {
        fname: "Prashant",
        lname: "Dey",
        rollnum:24
    },
    {
        fname: "Durga",
        lname: "Devi",
        rollnum:26
    },
    {
        fname: "Shalini",
        lname: "Nayar",
        rollnum:27
    },
 ]
//console.log(students[2].lname)
let f = sports.pop()
//console.log(f)
//console.log(sports)
let k = sports.push("badminton")
//console.log(sports)

//console.log(sports[2])
sports[2] = "basketball"

const players =[
    {
        Name: "Dhoni",
        Sport: "Cricket",
        Records:"2000 runs"
    },
    {
        Name: "Roger Federer",
        Sport: "Tennis",
        Records:"20 Grand slams"

    },{
        Name: "Sania Mirza",
        Sport: "Tennis",
        Records:"0 runs"
    },{
        Name: "Virat",
        Sport: "Cricket",
        Records:"6000 runs"
    },{
        Name: "Sindhu",
        Sport: "Badmiton",
        Records:"Olympic winner"
    }
]

function getPlayer(name)
{
    let leng = players.length
    for (let i=0;i<leng-1;i++)
    {
        if(players[i].Name == name )
        {
            console.log(players[i])
        }
    }
}
function addPlayer( newPlayer)
{
    players.push(newPlayer)
}
function displayAllPlayer(players)
{
    players.forEach(ele => {
        console.log(ele)
        // console.log("player name: ",ele.Name)
        // console.log("player sport: ",ele.Sport)
        // console.log("player records: ",ele.Records)
    });
}

displayAllPlayer(players)
getPlayer("Sindhu")
getPlayer("Dhoni")

const newPlayer = {Name:"Ashwin",Sport: "cricket",Records:"Best bowler"}

addPlayer(newPlayer)

displayAllPlayer(players)
