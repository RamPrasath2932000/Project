import React, {useState} from "react";
export default function CarLoanEmi(){
    const[principle,setPrinciple]=useState()
    const[rate,setRate]=useState()
    const[years,setYears]=useState()
    const[emi,setEMI]=useState(0)

    const handlePrinciple = (e)=>{
        setPrinciple(e.target.value)
    }
    const handleRate = (e)=>{
        setRate(e.target.value)
    }
    const handleYears = (e)=>{
        setYears(e.target.value)
    }
    const handleEMI=()=>{
        setEMI((principle*(rate/100/12)*((1+(rate/100/12))**(years*12)))/(((1+(rate/100/12))**(years*12))-1))
    }


    return(
        <div style={{border:"solid 30px lightgreen",borderRadius:"5px",padding:"50px",backgroundColor:"yellow"}}>
            <h1>Car Loan EMI Calculator</h1>
            <br/>
            <input
            type="number"
            id="principle"
            style={{width:"155px",color:"red",backgroundColor:"lightgreen",borderRadius:"5px"}}
            value={principle}
            onChange={handlePrinciple}
            placeholder="Enter the loan amount"></input>
            <br/>
            <input
            type="number"
            id="rate"
            style={{width:"155px",color:"red",backgroundColor:"lightgreen",borderRadius:"5px"}}
            value={rate}
            onChange={handleRate}
            placeholder="Enter the rate of interest"></input>
            <br/>
            <input
            type="number"
            id="years"
            style={{width:"155px",color:"red",backgroundColor:"lightgreen",borderRadius:"5px"}}
            value={years}
            onChange={handleYears}
            placeholder="Enter the tenture"></input>
            <br/>
            <br/>
            <button style={{backgroundColor:"lightgreen",color:"red",padding:"8px",borderRadius:"5px"}} onClick={handleEMI}>Submit</button>
            <h3>Monthly EMI : <span>&#8377;</span> {emi}</h3>


        </div>

    )
}