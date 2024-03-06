import React from "react";
export default function OnDrag(){

    const letsdrag=()=>{
        alert("Dragging...")
        console.log("Drag me")
    }
    return(
        <div style={{color:"green"}} draggable onDrag={letsdrag}>
            Hello World
        </div>
    )
}