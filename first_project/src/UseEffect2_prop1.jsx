import { useEffect } from "react";

function UseEffect2_prop1({myname,yourname}) {
     function myname() {
       console.log("Allahdad");
     }

     function yourname(){
        console.log("Ahmed")
     }

     
     //myname();//side effect for handle we use useEffect
     useEffect(()=>{
        myname();
        yourname();
     },[myname,yourname])
  return (
    <div>
      <h1>Useeffect in prop</h1>
      <h1>Myname:{myname} Yourname:{yourname}</h1>
      
    </div>
  );
}
export default UseEffect2_prop1;
