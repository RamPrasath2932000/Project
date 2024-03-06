import React from "react";
export default function OnPaste(){
    const handlePaste=()=>{
        alert("New text is pasted")
    }
    
    return(
        <div style={{color:"red"}}>       
             <p  style={{color:"red"}} onCopy>This text is available for copy.</p>
             <input style={{color:"red"}} onPaste={handlePaste} placeholder="Paste the content here"></input>
        </div>

    )
}