import React, { useContext } from "react";

import MyContext from "../MyContext";

let ChildC = ()=>{

    let data = useContext(MyContext);
    console.log(data);

    return(

        
        <>

        <h1>my name is {data.name}</h1>

        <h1>i am child C</h1>

        </>
    )
}

export default ChildC;