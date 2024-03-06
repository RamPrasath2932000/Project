import React, { useState } from "react";
export default function Target(){
    const[user,setuser]=useState("")
    return(
        <>
        <h1>Welcome {user}</h1>
        <input type="text" value={user} onChange={(event)=>setuser(event.target.value)} />
        </>
        )
}