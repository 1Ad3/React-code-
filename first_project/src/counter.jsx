import { use, useState } from "react";

function Counter()
{
    const[count,setCount]=useState(0);
   // const[reset,setreset]=useState();
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>count</button>

            <button onClick={()=>{
                setCount(0)
            }}>Reset</button>




        </div>
    )
}

export default Counter;