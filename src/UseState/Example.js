import React, { useState } from 'react';

const  Example = () => {
  // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//  <p> You clicked {count}</p>
//    <button onClick={() => setCount(count+1)}>
//        Click Me
//      </button>
//     </div>
//   );
const title = "I love you mow"
return (
    <div> <p  onClick = { () => alert(" you click the p tag again! ")}> Hello react js   </p>
      <h1> {title} </h1>
    </div>

)

}
export default Example; 