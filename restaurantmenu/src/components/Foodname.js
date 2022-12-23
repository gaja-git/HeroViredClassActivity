import React from 'react'

class Foodname extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fname: "Vada",
            type: "Medhu",
            count:1
        }
    }
    changeItem =() => {
        console.log("Pressed button")
        this.setState({
            fname:"soup",
            type:"Tomato",
            count:this.state.count+1
        })

    }
    render = () =>{
        return(
            <>
            <h1>
                Food name is {this.state.fname} and type {this.state.type}
                <p>Number:{this.state.count}</p>
            </h1>
            <button type="button" onClick={this.changeItem}>Change Item </button>
            </>
        )
    }
}
export default Foodname;