import React, { useState } from "react";
import UserX from "./components2/UserX";
import UserY from "./components2/UserY";
import UserZ from "./components2/UserZ";
import ColorContext from "./Context/MyContext";

let [color, setColor] = useState("blue");

console.log(ColorContext);

let App = ()=>{
  
  
  
  return(
    <>

    <ColorContext.Provider value = {color}>
     <UserX/>
    </ColorContext.Provider>

    </>
  )
}

export default App;