import React from "react";
export default function OnCopy(){
    const handleCopy=()=>{
        alert("The text is copied")
    }
    return(
        <p style={{color:"red"}} onCopy={handleCopy}>This text is available for copy.</p>
    )
}