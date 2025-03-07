import { Component } from "react"

function Login()
{
    return(
        <div>
            <h1>Login User</h1>
        </div>
    )
}

export default Login; // can be put anywhere

export function Profile()     // named export can be multiple 
{
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}


export function Setting() {
  return (
    <div>
      <h1>Setting</h1>
    </div>
  );
}


export const UserKey="123Allahdad";  // also we can export variable


// export default Profile;
//export default Login;   // export Login towards App.jsx  and I will import there if make two export default component in one file than occur error




// note in each file only one Component is default component other component are named 