function Loop()
{
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
      }
    ];
    return (
      <div>
        <h1>Loop in jsx with map function</h1>
        <h1>with loop</h1>
        <table border="1">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>university</td>
            </tr>
          </thead>
          <tbody>
            {
                userdata.map((user)=>(
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.university}</td>
                    </tr>
                ))
            }
          </tbody>
        </table>

        <br />

        <h1>Without loop</h1>
        <table border="1">
          <th>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>university</td>
            </tr>
          </th>
        </table>
      </div>
    );
}

export default Loop;