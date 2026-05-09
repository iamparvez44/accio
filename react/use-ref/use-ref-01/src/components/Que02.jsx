import React, { useRef } from "react";

let Que02 = () => {
  let btn01Ref = useRef(0);

  return (
    <>
      <button ref={btn01Ref}>btn01</button>

      <button
        onClick={() => {
          btn01Ref.current.style.backgroundColor = "red";
          console.log(btn01Ref.current);
        }}
      >
        btn02
      </button>
    </>
  );
};

export default Que02;
