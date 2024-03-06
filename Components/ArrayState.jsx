import React,{useState} from "react";
export default function ArrayState(){
    const [value,setvalue]=useState('');
    const [list,setlist]=useState([]);
    const [editindex,seteditindex]=useState(null)

    function handleadd()
    {
        if(value!==''){
            if(editindex!==null){
                const newlist=[...list]
                newlist[editindex]=value
                setlist(newlist)
                seteditindex(null)
            }
        else{
            setlist([...list,value])
        }
        setvalue('')
    }
    }

    function handleclear()
    {
        setlist([])
        setvalue('')
    }

    function handleedit(index)
    {
        setvalue(list[index])
        seteditindex(index)

    }
    
    function handledelete(index)
    {
        const newlist=[...list]
        newlist.splice(index,1)
        setlist(newlist)
    }
    
    return(
        <>
        <h1>Array Value - Add, Clear, Edit, Delete</h1>
        <p>
        <input type="text" value={value} onChange={((e)=>setvalue(e.target.value))}/>
        <button onClick={handleadd}>{editindex!==null ? 'Save':'Add'}</button>
        <button onClick={handleclear}>Clear</button>
        </p>
        <ul>
            {list.map((item,index)=>(
                <li key={index}>
                    {item}
                    <button onClick={() => handleedit(index)}>Edit</button>
                    <button onClick={() => handledelete(index)}>Delete</button>
                    </li>
            ))}
        </ul>
        </>
    )
}