import { useState } from "react";
function Togel()
{
    const[display,setDisplay]=useState(false);
    return (
      <div>
        <h1>Toggle in react </h1>
        <button onClick={() => setDisplay(!display)}>Toggle</button>
        {display ? <h1>Allahdad</h1> :null}
      </div>
    );
}

export default Togel;