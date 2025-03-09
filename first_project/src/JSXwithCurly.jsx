function JSWCB()
{
    let name="Allahdad";    // variable
    const father="hameer khan";
    //function without parameter
    function classmate()
    {
        return "Ahmed";
    }

    // function with parameter
    function sum(a,b)
    {
        return a+b;
    }

    function operation(a,b,op)
    {
        if(op=="+")
        {
            return a+b;
        }
        else if(op=="*")
        {
            return a*b;
        }
        else if(op=="/")
        {
            return a/b;
        }
    }

    // above code is js and below html thats why called jsx
    return (
      <div>
        <h1>Name:</h1>
        <h1>{name}</h1>
        <h1>My age is {21}</h1>
        {classmate()}
        {sum(2, 3)}
        <h1>call the operation function: {operation(10, 10, "*")}</h1>
        <h1>{father?father:"Father name not found"}</h1>
        {/* trianary operator */}
      </div>
    );
}

export default JSWCB;