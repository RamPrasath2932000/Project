import React,{useState} from "react";

import QRCode from "qrcode.react";

export default function QRgenerator(){
    const[text,setText]=useState('')

    return(
        <div style={{backgroundColor:"blue",color:"black"}}>
            <input type="text"
            value={text}
            placeholder="Enter the text"
            onChange={(e)=>setText(e.target.value)}
            ></input>

            <div>
                {text && <QRCode value={text}></QRCode>}
            </div>
        </div>
    )

}