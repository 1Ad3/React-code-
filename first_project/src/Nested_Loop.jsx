function Nested_Loop() {
  const university = [
    {
      Uname: "SIBAU",
      student: [{ Sname: "Aslam" }],
    },
    {
      Uname: "Namal",
      student: [{ Sname: "Akram" }],
    },
    {
      Uname: "Iqra",
      student: [{ Sname: "Nadeem" }],
    },
    {
      Uname: "QAU",
      student: [{ Sname: "Muneer" }],
    },
  ];

  return (
    <div>
      <h1>Nested Loop in Component</h1>
      {university.map((college, index) => (
        <div key={index}>
          <h3>Name: {college.Uname}</h3>
          <ul>
            {college.student.map((stu, stuIndex) => (
              <li key={stuIndex}>
                <h2>{stu.Sname}</h2> {/* ✅ Corrected Sname access */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Nested_Loop;
