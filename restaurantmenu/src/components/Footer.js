import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render =() => {
        return(
            <>
            <h1>Thank You {this.props.name}</h1>
            </>
        )
    }
}
export default Footer;