import React, { useEffect, useState } from "react";

let Clock = () => {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  let [show, setShow] = useState(true);

  useEffect(() => {

    if (!show) return;

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("heyy");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [show]);

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && <h1>Clock: {time}</h1>}
    </>
  );
};

export default Clock;
