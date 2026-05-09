import React, { useRef } from "react";

let Q1 = () => {
  let valRef = useRef(null);

  return (
    <>
      <form>
        <input type="text" placeholder="write somthing.." ref={valRef} />

        <button
          onClick={(e) => {
            e.preventDefault();
            valRef.current.focus();
          }}
        >
          click
        </button>
      </form>
    </>
  );
};

export default Q1;
