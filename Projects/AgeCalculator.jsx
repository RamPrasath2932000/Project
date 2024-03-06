import React,{useState} from "react";
export default function Age(){
    const[value,setValue]=useState()
    const[age,setAge]=useState()
    const[current,setCurrent]=useState()
    const[result,setResult]=useState()

    const handlebirth=(e)=>{
        setValue(e.target.value)
        const Birth=new Date(e.target.value)
        setAge(Number(Birth.getFullYear()))
        console.log(age)
        const currentYear = new Date()
        setCurrent(Number(currentYear.getFullYear()))
    }

    const handleAge=()=>{
        const r=current-age
        if(r>0){
            setResult(r)
        }
        else{
            setResult("Invalid Year")
        }
        
    }
    return(
        <div>
            <h1>Age Calculator</h1>
            <label>Birth of date<span>      </span>
            <input
            type="date"
            value={value}
            onChange={handlebirth}
            >
            </input></label>
            <br/>
            <button onClick={handleAge}>Calculate</button>
            <h3>{result}</h3>
        </div>
    )
}