import React, { useState } from "react";

let Counter = ()=>{

    let [count, setCount] = useState(0);

    function handleInc(e){

        setCount(count+1);

    }

    return(
        <>

            <p>{count}</p>
            <button onClick={handleInc}>Inc</button>

        </>
    )

}

export default Counter