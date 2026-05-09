import React, { useRef, useState } from "react";

let ToggleImg = () => {
  let [show, setShow] = useState(false);
  let velRef = useRef(null);

  function handleToggle(){

    setShow(!show);

    if(show){
        velRef.current.style.display = "none"
    }
    else{

        velRef.current.style.display = "block"

    }



  }

  return (
    <>
      <button onClick={handleToggle}> {show ? "Show" : "Hide"} </button>
        <img ref={velRef} src="https://plus.unsplash.com/premium_photo-1776931377795-73b1693c2c34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="my photo" width={"300px"}/>

    </>
  );
};

export default ToggleImg;
