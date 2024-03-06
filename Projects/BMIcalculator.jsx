import React,{useState} from "react";

export default function BMICalculator(){
    const[weight,setWeight]=useState();
    const[height,setHeight]=useState();
    const[bmi,setBMI]=useState();

    const mystyle={
      
        width: "200px"
      }

    const handleWeight = (e) =>{
        setWeight((e.target.value));
        console.log(weight)
    };

    const handleHeight = (e) =>{
        setHeight((e.target.value));
        console.log(height)
    };

    const handleBMI = () =>{
        setBMI((weight/(height**2)));
        setWeight('')
        setHeight('')
        
    };


    return(
        <>
        <h1>BMI Calculator</h1>
        <input type="number"
         style={mystyle}
        id="kilogram"
        value={weight}
        onChange={handleWeight}
        placeholder="Enter the weight in kilograms" />
        <br/>
        <input type="number"
         style={mystyle}
        id="height"
        value={height}
        onChange={handleHeight}
        placeholder="Enter the height in meters" />

        <p>Your BMI is {bmi} </p>

        <button onClick={handleBMI}>Calculate</button>

        </>
    )
}



