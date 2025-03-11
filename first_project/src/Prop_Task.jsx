import { useState,useEffect } from "react";
function Clock(){
    const[time,settime]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
                setTime(new Date().toLocaleTimeString);
        },1000);

    },[]);

    return (
    <div>
        <h1>Clock</h1>
        <h1>{time}</h1>
    </div>
       
    )
}
export default Clock;