import React from "react";
import { useState, useMemo } from "react";

const Que1 = () => {
  const [count, setCount] = useState(0);

  function handleIncrese() {
    setCount(count + 1);
  }

  function factorial() {
    function factorial(num) {
      let result = 1;

      for (let i = 1; i <= num; i++) {
        result *= i;
      }

      return result;
    }
  }

  function fact() {
    for (let i = 0; i <= 1000; i++) {
      console.log(factorial(i));
    }
  }

  
    useMemo(()=>{
        fact();
    }, [count])



  return <>
    
     <h1>{count}</h1>

      <button onClick={handleIncrese}>inc</button>
  
  </>;
};
export default Que1;
