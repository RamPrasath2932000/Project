import React from "react";
export default function OnSelect(){
    const myFunction=()=>{
        alert("The text is scrolled")
    }
    const mystyle={
        border: "1px solid black",
        width: "200px",
        height: "100px",
        overflow: "scroll",
        color:"red"
    }
    return(
        <>
        <h1 style={{color:"blue"}}>OnScroll</h1>
        <div style={mystyle} onScroll={myFunction}>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.
        <br/><br/>
        'Whenever you feel like criticizing anyone,' he told me, just remember that all the people in this world haven't had the advantages that you've had.'</div>
        </>)
}