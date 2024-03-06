import React, { useState } from "react";
export default function RDcalculator(){
    const[p,setP]=useState()
    const[r,setR]=useState()
    const[n,setN]=useState()
    const[t,setT]=useState()
    const[rd,setRD]=useState()

    const mystyle1={
        width:"210px"
    }
    const handleP=(e)=>{
        setP(Number(e.target.value))
    }
    
    const handleR=(e)=>{
        setR(Number(e.target.value))
    }
    
    const handleN=(e)=>{
        setN(Number(e.target.value))
    }
    
    const handleT=(e)=>{
        setT(Number(e.target.value))
        
    }

    const handleRD=()=>{
        var A =Number(p*((1+((r/100)/n))**(n*(t/12))))
        setRD(Number(A+p))
        setP('')
        setR('')
        setN('')
        setT('')

    }

    return(
        <>
        <h1>RD Calculator</h1>
        <input
        type="number"
        id="p"
        style={mystyle1}
        value={p}
        onChange={handleP}
        placeholder="Enter the principle amount"
        ></input>
        <br/>
        <input
        type="number"
        id="r"
        style={mystyle1}
        value={r}
        onChange={handleR}
        placeholder="Enter the rate of interest"
        ></input>
        <br/>
        <input
        type="number"
        id="n"
        style={mystyle1}
        value={n}
        onChange={handleN}
        placeholder="Enter the number of installments"
        ></input>
        <br/>
        <input
        type="number"
        id="t"
        style={mystyle1}
        value={t}
        onChange={handleT}
        placeholder="Enter the number of years"
        ></input>
        <br/>
        <p>The Maturity amount : {rd}</p>
        <button style={{background:"orange",color:"black"}} onClick={handleRD}><b>Calculate</b></button>
        </>
    )

       
}