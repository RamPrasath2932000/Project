import React, { useState } from "react";
export default function PPFcalculator(){
    const[install,setInstall]=useState()
    const[interest,setInterest]=useState()
    const[years,setYears]=useState()
    const[maturity,setMaturity]=useState()

    const handleInstall=(e)=>{
        setInstall(e.target.value)
    }
    const handleInterest=(e)=>{
        setInterest(e.target.value)
    }
    const handleYears=(e)=>{
        setYears(e.target.value)
    }
    const handlePPF=()=>{
        setMaturity(install*((((1+(interest/100))**years)-1)/(interest/100)))
        setInstall('')
        setInterest('')
        setYears('')
    }

    return(
        <>
        <h1>PPF Calculator</h1>
        <input
        type="number"
        id="install"
        style={{width:"175px"}}
        value={install}
        onChange={handleInstall}
        placeholder="Enter the Annual Installments"></input>
        <br/>
        <input
        type="number"
        id="interest"
        style={{width:"175px"}}
        value={interest}
        onChange={handleInterest}
        placeholder="Enter the rate of interest"></input>
        <br/>
        <input
        type="number"
        id="years"
        style={{width:"175px"}}
        value={years}
        onChange={handleYears}
        placeholder="Enter the number of years"></input>
        <br/>

        <p>Total Matured Amount : {maturity}</p>

        <button onClick={handlePPF}>Calculate</button>
        </>

    )
}