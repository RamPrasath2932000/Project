import React from "react";
export default function OnCut(){
    const handleCut=()=>{
        alert("The text is cutted")
    }
    return(
        <p style={{color:"red"}} onCut={handleCut}>This text is available for cut.</p>
    )
}