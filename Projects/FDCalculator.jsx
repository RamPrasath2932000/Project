import React, { useState } from "react";
export default function Fdcalculator(){
    
    const[p,setP]=useState()
    const[r,setR]=useState()
    const[t,setT]=useState()
    const[result,setResult]=useState()

    const mystyle={
            color:"black"
    }
    const mystyle1={
        width:"168px"
    }

    const handleP=(e)=>{
        setP(Number(e.target.value))
    }
    const handleR=(e)=>{
        setR(Number(e.target.value))
    }
    const handleT=(e)=>{
        setT(Number(e.target.value))
    }

    const handleFD=()=>{
        var I=Number((p*r*t)/100)
        setResult(Number(p+I))
        setP('')
        setR('')
        setT('')
    }

    return(
        <div style={mystyle}>
        <h1>FD Calculator</h1>
        <input
        style={mystyle1}
        type="number"
        id="p"
        value={p}
        onChange={handleP}
        placeholder="Enter the principle amount"
        ></input>
        <br/>
        <input
        style={mystyle1}
        type="number"
        id="r"
        value={r}
        onChange={handleR}
        placeholder="Enter the rate of interest"
        ></input>
        <br/>
        <input
        style={mystyle1}
        type="number"
        id="t"
        value={t}
        onChange={handleT}
        placeholder="Enter the number of years"
        ></input>
        <br/>
        <p>The Maturity amount : {result}</p>
        <button style={{background:"lightgreen",color:"black"}}onClick={handleFD}>Calculate</button>
        </div>
    )
}