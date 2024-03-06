import React,{useState,useEffect} from "react";
export default function PropandState(){
    const[count,setCount]=useState(0)
    const[mul,SetMul]=useState(0)
    useEffect(()=>{
        SetMul(()=>(count*2))
    })

    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Multiply Value</button>
        <h1>Mul Value : {mul}</h1>
        </>
    )
}