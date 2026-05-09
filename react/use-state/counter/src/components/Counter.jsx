import React, { useState } from "react";

let Counter = () => {
  let [num, setNum] = useState(0);

  function increse() {
    if (num < 10) {
      setNum((num) => num + 1);
      setNum((num) => num + 1);
    }

    console.log(num);
  }

  function reset() {
    setNum(num - num);
    console.log(num);
  }

  function decriment() {
    if (num > -10) {
      setNum(num - 1);
    }
    console.log(num);
  }

  return (
    <div>
      <h1>Count: {num} </h1>
      <button onClick={increse}>Inc</button>
      <button onClick={decriment}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
