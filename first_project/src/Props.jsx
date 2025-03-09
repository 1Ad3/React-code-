
//here concept of prob   basically data is prob            when use parameter.name
// function Prop(data)
// {
//     return(
//         <div>
//             <h1>Props Component</h1>
//             <h1>My name is {data.name}</h1>
//             <h1>Age:{data.age}</h1>
//             <h1>Email:{data.email}</h1>
//         </div>
//     )
// }




// Note when pass object put in parameter 
// function Prop({ad}) {
//   return (
//     <div>
      
//       <h1>{ad.name}</h1>
//       <h1>{ad.section}</h1>
//       <h1>{ad.age}</h1>
//       <hr />

    
//     </div>
//   );
// }



function Prop({ std }) {
  return (
    <div>
      <h1>{std[1]}</h1>
      <hr />
    </div>
  );
}

export default Prop;