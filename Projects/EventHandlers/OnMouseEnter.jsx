import React, { useState } from "react";
export default function OnMouseEnter(){
    const[first,setFirst]=useState("I am the best")
    const change=()=>{
        setFirst("Text changed")
    }
    return(
        <p style={{color:"purple"}} onMouseEnter={change}>{first}</p>
    )
}