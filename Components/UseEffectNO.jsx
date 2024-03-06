import React,{useState,useEffect} from "react";
export default function NoDepend(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(()=>count+1)
        },2000)
    })

    return <h1>Count : {count}</h1>
}