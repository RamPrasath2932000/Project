import React,{useState} from "react";
function getdateandtime(){
    const dt=new Date()
    const month=(dt.getMonth())+1;
    const date=dt.getDate()+'/'+month+'/'+dt.getFullYear();
    const showTime = dt.getHours()
        + ':' + dt.getMinutes()
        + ":" + dt.getSeconds();
    return("Date : "+date+"   "+"Time - "+showTime);
}
export default function DateandTime(){
    const[date,setdate]=useState("")
    
    return(
        <>
        <h1>{date}</h1>
        <button onClick={()=>setdate(getdateandtime())}>Display Date and Time</button>
        </>
    )
}
 