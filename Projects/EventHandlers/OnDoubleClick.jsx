import React, { useState } from "react";
export default function OnDoubleClick(){
    const[newone,setNewone]=useState("Hi Welcome")
    const newone1=()=>{
        setNewone("Bye")
    }
    return(
        <div style={{color:"red"}}>
        <h1>{newone}</h1>
        <button style={{backgroundColor:"greenyellow"}} onDoubleClick={newone1}>Replace on Double Click</button>
        </div>
    )
}