import React,{useState} from "react";
export default function Gratuity(){
    const[salary,setSalary]=useState()
    const[tenture,setTenture]=useState()
    const[result,setResult]=useState()

    const handleSalary=(e)=>{
        setSalary(e.target.value)
    }
    
    const handleTenture=(e)=>{
        setTenture(e.target.value)
    }

    
    const handleTotal=(e)=>{
        setResult((salary*tenture*15)/26)
    }

    return(
        <div>
            <h1>Gratuity Calculator</h1>
            <label>Monthly Salary<br/>   
            <input
            type="number"
            value={salary}
            onChange={handleSalary}
            placeholder="Enter the salary"></input></label>
            <br/>
            <br/>
            <label>Years of service 
            <br/>
            <input
            type="range"
            max={50}
            min={5}
            value={tenture}
            onChange={handleTenture}
            placeholder="Enter the years"></input><span>{tenture}</span></label>
            <br/>
            <button onClick={handleTotal} type="submit">Calculate</button>
            <br/>
            <h3>Total Gratuity Payable
                <br/>
                <span>&#8377;</span> {result}
            </h3>
        </div>
    )

}