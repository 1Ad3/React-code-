import { useState } from "react";

function MCondition()
{
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>Multiple Condition in React</h1>
            <h1>Counter:{count}</h1>
                <button onClick={()=>{
                   setCount(count+1) 
                }}>Counter</button>

            {
                count==0?<h1>I</h1>
                :count==1?<h1>am</h1>
                :count==2?<h1>a</h1>
                :count==3?<h1>handsome</h1>
                :count==4?<h1>boy</h1>
                :null
              

            }
        </div>
    )
}
export default MCondition;