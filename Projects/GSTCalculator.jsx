import React,{useState} from "react";
export default function GST(){
    const[original,setOriginal]=useState()
    const[gst,setGST]=useState()
    const[result,setResult]=useState()
    const[result1,setResult1]=useState()

    const handleoriginal=(e)=>{
        setOriginal(e.target.value)
    }
    
    const handleGST=(e)=>{
        setGST(e.target.value)
    }

    
    const handleTotal=()=>{
        setResult((original*gst)/100)
        setResult1(original+result)

    }

    return(
        <div>
            <h1>GST Calculator</h1>
            <label>Original Price<br/>   
            <input
            type="number"
            value={original}
            onChange={handleoriginal}
            placeholder="Enter the original price"></input></label>
            <br/>
            <br/>
            <label>GST % 
            <br/>
            <input
            type="range"
            max={100}
            min={1}
            value={gst}
            onChange={handleGST}
            ></input><span>{gst}</span></label>
            <br/>
            <button onClick={handleTotal} type="submit">Calculate</button>
            <br/>
            <h3>GST Amount
                <br/>
                <span>&#8377;</span> {result}
            </h3>
            <h3>Net Price
                <br/>
                <span>&#8377;</span> {result1}
            </h3>
        </div>
    )

}