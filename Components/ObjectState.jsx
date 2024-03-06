import React,{useState} from "react";
export default function ObjectState(){
    const [userinfo,setuserinfo]=useState({firstname:'',lastname:'',email:''})
    function updatefield(fieldname,value){
        setuserinfo({...userinfo,[fieldname]:value})
    }
            
    return(
        <div>
        <input
        type="text"
        value={userinfo.firstname}
        onChange={(e)=>updatefield('firstname',e.target.value)}
        placeholder="First Name"
        />

        <input
        type="text"
        value={userinfo.lastname}
        onChange={(e)=>updatefield('lastname',e.target.value)}
        placeholder="Last Name"
        />

        <input
        type="text"
        value={userinfo.email}
        onChange={(e)=>updatefield('email',e.target.value)}
        placeholder="Email"
        />
        <p>Welcome {userinfo.firstname} {userinfo.lastname}<br/>
        Your Email is {userinfo.email}</p>
        </div>
    )
} 