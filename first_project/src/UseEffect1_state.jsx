// side effect of state and solve by useEffect
import { useEffect, useState } from "react";
function UseEffect1()
{
    const[counter,setcounter]=useState(0);
    useEffect(()=>{
        myname();
    },[])
    function myname()
    {
       console.log("Allahdad");
    }

    //myname();  //now here is side effect of state when we call the function from outside od useeffct
    return(
        <div>
            <h1>UseEffect Hook</h1>
            <button onClick={()=>{
                setcounter(counter+1);
            }}

            >counter:{counter}</button>
        </div>
    )
}
export default UseEffect1;