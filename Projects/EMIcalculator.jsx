import React, { useState } from "react";
export default function EMIcalculator(){
    const[principle,setPrinciple]=useState()
    const[r,setR]=useState()
    const[rate,setRate]=useState()
    const[install,setInstall]=useState()
    const[result,setResult]=useState()

    const handlePrinciple =(e)=>{
        setPrinciple(e.target.value)
    }
    const handleRate =(e)=>{
        var R=e.target.value
        setRate(R/(100))
    }
    const handleInstall=(e)=>{
        setInstall(e.target.value)
    }

    const handleEMI=()=>{
        setResult((principle*rate*((1+rate)**install))/((1+rate)**(install-1)))
    }


    return(
        <>
        <h1>EMI Calculator</h1>
        <input type="number"
        id="principle"
        style={{width:"205px"}}
        value={principle}
        onChange={handlePrinciple}
        placeholder="Enter the principle amount"/>
        <br/>
        <input type="number"
        id="rate"
        value={rate}
        style={{width:"205px"}}
        onChange={handleRate}
        placeholder="Enter the rate of interest"/>
        <br/>
        <input type="number"
        id="install"
        value={install}
        style={{width:"205px"}}
        onChange={handleInstall}
        placeholder="Enter the number of installments"/>
        <br/>
        <p>EMI : Rs.{result} </p>
        <button onClick={handleEMI}>Calculate</button>
        </>
    )

}