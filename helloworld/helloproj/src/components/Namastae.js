import React,{useState} from 'react';


class Namastae  extends React.Component{
    constructor(props){
        console.log("Im inside constructor");
        super(props);
        
        this.state ={
            name: this.props.name,
            phone: this.props.phone,
            email:this.props.mail
        }
    }

    handleClick = () => {
        this.setState({
            name: "Binu",
            phone: "2345456",
            email: "binu@gmail.com"
        })
    }
    
    componentDidMount = () =>{
        console.log("Im inside componentDidMount");
        this.setState({
            name: "Linu",
            phone: "2345456",
            email: "linu@gmail.com"
        })
    }

    componentDidUpdate =() =>{
        console.log("Im inside componentDidUpdate");
    }

    componentWillUnmount =() =>{
        console.log("Im inside componentWillUpdate");
    }

    render(){
        return(
        <div className="Display">
        <div>{this.state.name}</div>
        <div>{this.state.phone}</div>
        <div>{this.state.email}</div>
        <button onClick={this.handleClick}>Change</button> 

        {/* <h3> Namastae !</h3> */}
        </div>
        )
    }


}

export default Namastae;