// import React, { useEffect, useState } from "react";

// const CounterAppWithHistory = () => {

//     let [inpValue, setInpValue] = useState("");
//     let [currentValue, setCurrentValue] = useState(inpValue);
//     let [historyArray, setHistoryArray] = useState([]);
//     let [currentIdx, setCurrentIdx] = useState(-1)

   

    



// function handleSubmit(e){
//  e.preventDefault();

//  setCurrentValue(inpValue);

//  setHistoryArray([...historyArray, inpValue])



// }


//   return (
//     <div>
//       <h1>Result: {currentValue}</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" 
//         placeholder="Enter a number"
//          onChange={(e)=>{setInpValue(e.target.value)}}
//          value={inpValue}
//          />
//         <button>submit</button>
//       </form>

//       <button>Previos Value</button>
//       <br />
//       <button>Next Value</button>
//     </div>
//   );
// };
// export default CounterAppWithHistory;






// import React, { useState } from "react";

// const CounterAppWithHistory = () => {
//   const [inpValue, setInpValue] = useState("");
//   const [currentValue, setCurrentValue] = useState("");
//   const [historyArray, setHistoryArray] = useState([]);
//   const [currentIdx, setCurrentIdx] = useState(-1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     let updatedHistory = [...historyArray, inpValue];

//     setHistoryArray(updatedHistory);

//     // latest value show
//     setCurrentValue(inpValue);

//     // latest index set
//     setCurrentIdx(updatedHistory.length - 1);

//     setInpValue("");
//   }

//   function handlePrevious() {
//     if (currentIdx > 0) {
//       let prevIdx = currentIdx - 1;

//       setCurrentIdx(prevIdx);
//       setCurrentValue(historyArray[prevIdx]);
//     }
//   }

//   function handleNext() {
//     if (currentIdx < historyArray.length - 1) {
//       let nextIdx = currentIdx + 1;

//       setCurrentIdx(nextIdx);
//       setCurrentValue(historyArray[nextIdx]);
//     }
//   }

//   return (
//     <div>
//       <h1>Result: {currentValue}</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter a number"
//           onChange={(e) => setInpValue(e.target.value)}
//           value={inpValue}
//         />

//         <button>Submit</button>
//       </form>

//       <br />

//       <button onClick={handlePrevious}>
//         Previous Value
//       </button>

//       <br />
//       <br />

//       <button onClick={handleNext}>
//         Next Value
//       </button>
//     </div>
//   );
// };

// export default CounterAppWithHistory;







// COUNTER APP WITH HISTORY



import React, { useState } from "react";

const CounterAppWithHistory = () => {
    
  const [count, setCount] = useState(0);

  // input value
  const [inpValue, setInpValue] = useState("");

  // history store
  const [historyArray, setHistoryArray] = useState([0]);

  // current history index
  const [currentIdx, setCurrentIdx] = useState(0);

  // browser history jaisa behavior
  function updateHistory(newValue) {
    // agar previous state par ho
    // aur new action karo
    // to aage wali history remove ho jayegi

    let trimmedHistory = historyArray.slice(
      0,
      currentIdx + 1
    );

    let updatedHistory = [
      ...trimmedHistory,
      newValue,
    ];

    setHistoryArray(updatedHistory);

    setCurrentIdx(updatedHistory.length - 1);

    setCount(newValue);
  }

  function increment() {
    updateHistory(count + 1);
  }

  function decrement() {
    updateHistory(count - 1);
  }

  function reset() {
    updateHistory(0);
  }

  // input se custom add
  function handleAddValue() {
    if (inpValue === "") return;

    let num = Number(inpValue);

    updateHistory(count + num);

    setInpValue("");
  }

  function handlePrevious() {
    if (currentIdx > 0) {
      let prevIdx = currentIdx - 1;

      setCurrentIdx(prevIdx);

      setCount(historyArray[prevIdx]);
    }
  }

  function handleNext() {
    if (
      currentIdx <
      historyArray.length - 1
    ) {
      let nextIdx = currentIdx + 1;

      setCurrentIdx(nextIdx);

      setCount(historyArray[nextIdx]);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter: {count}</h1>

      <button onClick={increment}>
        +1
      </button>

      <button onClick={decrement}>
        -1
      </button>

      <button onClick={reset}>
        Reset
      </button>

      <hr />

      <input
        type="number"
        placeholder="Enter number"
        value={inpValue}
        onChange={(e) =>
          setInpValue(e.target.value)
        }
      />

      <button onClick={handleAddValue}>
        Add Number
      </button>

      <hr />

      <button
        onClick={handlePrevious}
        disabled={currentIdx === 0}
      >
        Previous
      </button>

      <button
        onClick={handleNext}
        disabled={
          currentIdx ===
          historyArray.length - 1
        }
      >
        Next
      </button>

      <hr />

      <h3>History:</h3>

      {historyArray.map((item, idx) => (
        <p
          key={idx}
          style={{
            fontWeight:
              idx === currentIdx
                ? "bold"
                : "normal",
          }}
        >
          Index {idx} : {item}
        </p>
      ))}
    </div>
  );
};

export default CounterAppWithHistory;