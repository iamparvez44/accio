import React, { useRef } from "react";

let Q2 = () => {
  let valRef = useRef(null);

  return (
    <>
      <h1 ref={valRef}>heyy, this is about useRef hooks</h1>
      <button onClick={()=>{

            valRef.current.style.color = "red";

      }}>Change Color</button>
    </>
  );
};

export default Q2;
