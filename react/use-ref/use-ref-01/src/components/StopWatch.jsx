import React, { useEffect, useRef, useState } from "react";

let StopWatch = () => {
  let [time, setTime] = useState(0);
  let aRef = useRef(null);

  function handleStart() {
    if (aRef.current !== null) return;

    aRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(aRef.current);
    aRef.current = null;
  }

  function handleReset() {
    clearInterval(aRef.current);
    aRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>Stop Watch: {time} Seconds</h1>

      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

export default StopWatch;
