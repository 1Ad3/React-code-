// import Login,{Profile,Setting,UserKey} from './UserComponent' // for named,variable import we use curly brackets 
// import MyProfile from './Exercise1Profile';
// import JSWCB from './JSXwithCurly';
// import CFcall from './Click_FunctionCall';
import State from "./State_in_react";
function App() {
  let x=10;
  let y=20;
  return (
    <div>
      {/* <h1>Allahdad</h1> */}
      {/* for use the second component use tag name of component */}
      {/* <Student></Student>
      <Login></Login>
      <Profile></Profile>
      <Setting></Setting> */}
     {/* <h1>{UserKey},{10+20},{x*y}</h1>   */}
     {/* use of variable in brackets */}
     {/* <button onclick={()=>alert("Hello")}>click here</button> */}

      {/* <MyProfile></MyProfile>

     <h1>JSX with curly braces</h1>
     <JSWCB></JSWCB>  */}


     {/* <CFcall></CFcall> */}

        <State></State>



    </div>
  );
}
function Student() {
  return <h1>Ahmed</h1>;
}

export default App;
