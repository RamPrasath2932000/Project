import React from "react";
export default class SetStateClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={name:"Virat Kohli"}
    }
    changecontent(){
        this.setState({name:"RAJNIKANTH"})
    }
    render(){
        return(
            <>
            <h1>The King {this.state.name} is back.</h1>
            <button onClick={() => this.changecontent()}>Submit</button>
            </>
        )
    }
}