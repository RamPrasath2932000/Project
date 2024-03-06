import React from "react";

const PropsArrowExample = (props) =>{
    console.log(props)
    return(
        <h1>Hi {props.name}</h1>
    )
}
export default PropsArrowExample