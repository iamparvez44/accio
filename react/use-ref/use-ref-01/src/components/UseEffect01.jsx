import React, { useEffect, useRef, useState } from "react";

let UseEffect01 = () => {
  const [input, setInput] = useState("");

  const inputRef = useRef("");

  console.log(inputRef);

  useEffect(()=>{

    if(inputRef.current){
        inputRef.current.focus();
    }

  },[])

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter"
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
      </form>

      <p>{input}</p>
    </>
  );
};

export default UseEffect01;
