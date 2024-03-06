import React, { useCallback, useState } from "react";
export default function SalaryCalculator(){
    const[annual,setAnnual]=useState()
    const[monthly,setMonthly]=useState();
    const[weekly,setWeekly]=useState();
    const[daily,setDaily]=useState();
    const[hourly,setHourly]=useState();
    const[result1,setResult1]=useState();
    const[result2,setResult2]=useState();
    const[result3,setResult3]=useState();
    const[result4,setResult4]=useState();

    const SalaryAnnual =(e) =>{
        setAnnual(e.target.value)
    }

    const handleSalary =() =>{
        setResult1(annual/12)
        setResult2(annual/52)
        setResult3((annual/12)/26)
        setResult4((annual/52)/40)    
        setAnnual('')
    }


    return(
        <>
        <h1>Salary Calculator</h1>
        <input type="number"
        id="Anually"
        style={{width:"175px"}}
        value={annual}
        onChange={SalaryAnnual}
        placeholder="Enter the salary per annum"/>
        <br/>
        <button style={{background:"violet"}} onClick={handleSalary}>Calculate</button>
        <p>Monthly Salary: Rs.{result1}
        <br/>
        Weekly Salary: Rs.{result2}
        <br/>
        Daily Salary: Rs.{result3}
        <br/>
        Hourly Salary: Rs.{result4}
        </p>
        </>
        


    )



}