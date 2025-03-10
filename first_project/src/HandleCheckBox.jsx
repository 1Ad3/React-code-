import { useState } from "react";

function HandleCheckBox()
{
    const[skill,setskill]=useState([]);
    const handleskill=(event)=>{
        if(event.target.checked)
        {
            setskill([...skill, event.target.value]);
        }
        else{
            // use of filter function
            setskill([...skill.filter((item)=>item!=event.target.value)])
        }
    }
    return (
      <div>
        <h1>Handle the check box</h1>
        <h2>select your skills</h2>
        <input onChange={handleskill} type="checkbox" id="php" value="php" />
        <label htmlFor="php">PHP</label>
        <br />
        <input onChange={handleskill} type="checkbox" id="cpp" value="cpp" />
        <label htmlFor="cpp">Cpp</label>
        <br />
        <input onChange={handleskill} type="checkbox" id="java" value="java" />
        <label htmlFor="java">Java</label>
        <br />
        <input
          onChange={handleskill}
          type="checkbox"
          id="python"
          value="python"
        />
        <label htmlFor="python">Python</label>

        {/* for display */}
        <h1>{skill.toString()}</h1>
      </div>
    );
}

export default HandleCheckBox;