import { useState } from "react";
function GetInputField()
{
    const[val,setval]=useState("Allahdad");
    return(
        <div>
            <h1>Get Input Field</h1>
            {/* below I use onChange event */}
            <input type="text" value={val} onChange={(event)=>{
                setval(event.target.value)
            }} placeholder="Enter user name" />
            <h1>{val}</h1>

            <button onClick={()=>{
                setval("")
            }}>Clear value</button>
        </div>
    )
}

export default GetInputField;