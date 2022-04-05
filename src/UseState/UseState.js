import React, { useState } from "react";


const UseState = () => {
    // let counter = 0 ; 
    // function setcount(){
    //     counter = counter + 1 ; 
    //     console.log(counter)

    // }
    // const [value, setValue(function)] = useState(0)
  const  [ inputValue, setinputValue] = useState("sajib")
  function iloveyou(event){
     const newValue = event.target.value
     setinputValue(newValue)
  }
    return  <div>  <input placeholder="write sometihng.. " onChange={iloveyou} />
    {inputValue}
            
             
     </div>
}

export default UseState; 