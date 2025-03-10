import { useState } from "react";

function Radio_dropdown()
{
    const[gender,setgender]=useState('male');
    //above I have give by default value so in input we use checked!
    const[city,setcity]=useState("Lahore");
    return (
      <div>
        <h1>Radio and drop down </h1>
        <h2>Select Gender</h2>
        <input
          onChange={(event) => {
            setgender(event.target.value);
          }}
          type="radio"
          id="male"
          name="gender"
          value={"male"}
          checked={gender == "male"}
        />
        <label htmlFor="male">Male</label>
        <input
          onChange={(event) => {
            setgender(event.target.value);
          }}
          type="radio"
          id="female"
          name="gender"
          value={"female"}
          checked={gender == "female"}
        />
        <label htmlFor="female">Female</label>
        {/* above when name same than it will select one among both  */}
        {/* if we will not add value than it will show on */}
        <h3>Selected Gender::{gender}</h3>
        <br />
        <br />
        <h2>Select City</h2>
        {/* for Selection */}
        <select defaultValue={"Lahore"} onChange={(event)=>{
            setcity(event.target.value)
        }}>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="larkana">larkana</option>
          <option value="Islamabad">Islamabad</option>

        </select>
        <h1>Selected city:{city}</h1>
      </div>
    );
}

export default Radio_dropdown;