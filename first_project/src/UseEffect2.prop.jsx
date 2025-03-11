import UseEffect2_prop1 from "./UseEffect2_prop1";
import { useState } from "react";
function UseEffect2_prop()
{
    const [myname,setmyname]=useState(0);
    const [yourname, setyourname] = useState(0);
    return (
      <div>
       
        <UseEffect2_prop1 myname={myname }></UseEffect2_prop1>
        <button onClick={()=>{
            setmyname(myname+1)
        }}>Myname:{myname}</button>


         <UseEffect2_prop1 yourname={yourname}></UseEffect2_prop1>
        <button onClick={()=>{
            setyourname(yourname+1)
        }}>Yourname:{yourname}</button>
      </div>
    );
}
export default UseEffect2_prop;
