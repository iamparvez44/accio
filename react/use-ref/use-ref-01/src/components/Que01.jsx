//Build an input + button. On button click, auto-focus the input.

import React, { useState, useRef } from "react";
import { use } from "react";

let Que01 = ()=>{

    const [inp, setInp] = useState("");

    const inpUseRef = useRef("");
    console.log(inpUseRef);

    function handleFocus(){

        if(inpUseRef.current){
            inpUseRef.current.focus();
        }

    }


    return(
        <>

            <form>

                <input type="text"
                 placeholder="Enter somthing" 
                 onChange={e=>{setInp(e.target.value)}}
                 ref={inpUseRef}
                 />


                <button onClick={handleFocus} >focus</button>

            </form>

        <p>{inp}</p>

        </>
    )

}

export default Que01;