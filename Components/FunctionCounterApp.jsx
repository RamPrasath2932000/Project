import React, { useState } from "react";
export default function CounterApp(){
    const[count,setcount]=useState(0)
    return(
        <>
        <h1 style={{color:"red"}}>{count}</h1>
        <p>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={()=>setcount(count-1)}>Decrement</button>
            <button onClick={()=>setcount(0)}>Reset</button>
        </p>
        </>
    )
}