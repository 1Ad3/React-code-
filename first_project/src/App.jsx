// import Login,{Profile,Setting,UserKey} from './UserComponent' // for named,variable import we use curly brackets 
// import MyProfile from './Exercise1Profile';
// import JSWCB from './JSXwithCurly';
// import CFcall from './Click_FunctionCall';
// import State from "./State_in_react";
// import Counter from "./counter";
// import Togel from "./Togel_hide";
// import MCondition from "./Multiple_condition";
// import Prop from "./Props";
// import DefaultProp from "./defaultprops";
// import App1 from "./App1";
import App2 from "./App2";

function App() {
  // let UserObj={
  //     name:"Allahdad",
  //     section:'D',
  //     age:21
  // }

  //  let UserObj1 = {
  //    name: "Allahdad",
  //    section: "D",
  //    age: 21,
  //  };
  //   let UserObj2 = {
  //     name: "Allahdad",
  //     section: "D",
  //     age: 21,
  //   };

  // let std=["Allahdad","Asad","Akram"];
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

      {/* <State></State> */}

      {/* <Counter></Counter> */}

      {/* <Togel></Togel> */}

      {/* <MCondition></MCondition> */}

      {/* <Prop name="Allahdad" age={29} email="chacharallahdad2@gmail.com"></Prop> */}
      {/* above we can pass direct value or assign above both will work */}

      {/* <Prop ad={UserObj}></Prop>
      <Prop ad={UserObj1}></Prop>
      <Prop ad={UserObj2}></Prop> */}
      {/* <Prop std={std}></Prop> */}

      {/* <DefaultProp name="Allahdad"></DefaultProp>
      <DefaultProp name="Asad"></DefaultProp> */}
      {/* above I not assign the value it will assign default value */}
      {/* <DefaultProp />
      <DefaultProp /> */}

      {/* <DefaultProp color="orange">
        <h1>Allahdad</h1>
      </DefaultProp>

      <DefaultProp>
        <h1>Asad</h1>
      </DefaultProp> */}



     {/* Note:Further I will export in App1 file */}

      {/* <App1></App1> */}
      <App2></App2>
    </div>
  );
}


// function Student() {
//   return <h1>Ahmed</h1>;
// }

export default App;
