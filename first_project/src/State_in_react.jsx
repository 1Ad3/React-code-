//we use state for the rerender and we use when change the values and import first
import { useState } from "react";




function State()
{
    const[fruit,setFruit]=useState("Apple");

    const changename=()=>
    {
        setFruit("Banana");
    }
    return(
        <div>
            <h1>Use of state in react</h1>
            <h1>{fruit}</h1>
            <button onClick={changename}>click to change fruit name</button>
        </div>
    )
}



// function State()
// {
//     let fruit="Apple";

//     const changename=()=>
//     {
//         fruit="banana";
//         console.log(fruit)
//     }
//     // value will display when we rerender when we use state
//     return(
//         <div>
//             <h1>State in react</h1>
//             <h1>{fruit}</h1>
//             <button onClick={changename}>click to change fruit name</button>

//         </div>
//     )
// }

export default State;