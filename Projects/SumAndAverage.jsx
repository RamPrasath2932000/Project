import React,{useState} from "react";
export default function SumAndAverage(){
    const[num1,setNum1]=useState()
    const[num2,setNum2]=useState()
    const[num3,setNum3]=useState()
    const[num4,setNum4]=useState()
    const[num5,setNum5]=useState()
    const[result,setResult]=useState()
    const[average,setAverage]=useState()
    
    const mystyle={
      
      width: "200px"
    }
    const First = (e) => {
        setNum1(Number(e.target.value));
      };

      const Second = (e) => {
        setNum2(Number(e.target.value));
      };

      const Third = (e) => {
        setNum3(Number(e.target.value));
      };

      const Fourth = (e) => {
        setNum4(Number(e.target.value));
      };

      const Fifth = (e) => {
        setNum5(Number(e.target.value));
      };

      const Sum = () => {
        setResult(num1 + num2 + num3 + num4 + num5);
        setAverage((num1 + num2 + num3 + num4 + num5)/5)
        setNum1('')
        setNum2('')
        setNum3('')
        setNum4('')
        setNum5('')
      };

    
    return(
        <>
        <h1>Sum and Average of five numbers</h1>
        <input
        style={mystyle}
        type="number"
        id="firstnumber"
        value={num1}
        onChange={First}
        placeholder="Enter the First number"
        />
        <br />
        <input
        style={mystyle}
        type="number"
        id="secondnumber"
        value={num2}
        onChange={Second}
        placeholder="Enter the Second number"
        />
        <br />
        <input
        style={mystyle}
        type="number"
        id="thirdnumber"
        value={num3}
        onChange={Third}
        placeholder="Enter the Third number"
        />
        <br />
        <input
        style={mystyle}
        type="number"
        id="fourthnumber"
        value={num4}
        onChange={Fourth}
        placeholder="Enter the Fourth number"
        />
        <br />
        <input
        style={mystyle}
        type="number"
        id="fifthnumber"
        value={num5}
        onChange={Fifth}
        placeholder="Enter the Fifth number"
        />
        <p>Sum: {result}<br/>Average: {average}</p>
        
        <button onClick={Sum}>Answer</button>
        </>
        
    )
}