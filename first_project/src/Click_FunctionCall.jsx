function CFcall()
{
    const fruit=()=>{
        alert("Apple");
    }
    
    return (
      <div>
        <h1>Event and function call</h1>
        <button
          onClick={function callfunction() {
            alert("function called");
          }}
        >
          click here
        </button>


        {/* above we pass the defination  for the call  */}

        {/* for arrow function */}
        <button onClick={fruit}>click for fruit </button>
        
      </div>
    );
}

export default CFcall;