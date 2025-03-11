import RCLoop1 from "./Reuse_C-1";
function RCLoop() {
  const userdata = [
    {
      id: "023-22-0056",
      name: "Allahdad",
      university: "Sukkur iba university",
    },
    {
      id: "023-22-0057",
      name: "Asad",
      university: "Sukkur iba university",
    },
    {
      id: "023-22-0058",
      name: "Adeel",
      university: "Sukkur iba university",
    },
    {
      id: "023-22-0059",
      name: "Anas",
      university: "Sukkur iba university",
    },
  ];
  return (
    <div>
      <h1>Reuse component in loop</h1>
      {
        //this bracket is js bracket
        userdata.map((user) => (
          <div key={user.id}>
            <RCLoop1 user={user}></RCLoop1>
          </div>
        ))
      }
    </div>
  );
}

export default RCLoop;
