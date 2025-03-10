//if we another component we do not pass the value than we assign default value in parameter
// 




function DefaultProp({children,color }) {
  return (
    // for style we give double brackets
    <div style={{color:color, border:"5px solid green"}}>
        {children}
      
    </div>
  );
}


export default DefaultProp;