import React, { useEffect, useState } from "react";

let Basic01 = () => {
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(5);

  // variation 01
  // useEffect will run on every render
//   useEffect(() => {
//     console.log("i will run on every render");
//   });



// variation 02
  // useEffect will run once on first render if dependncy array is empty


//   useEffect(()=>{

//     console.log("i will run only once");

//   }, [])


//variation 3
// useEffect will run on the basis of denependy array, if dependency array having one or more states variable if they will change 
// useEffect will also run

// useEffect(()=>{

//     console.log("jab total chalega tb me chaluga");
//     console.log("count k sath b chaluga");

// }, [total, count])





  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Inc
      </button>


      <h1>Total: {total}</h1>
      <button
        onClick={() => {
          setTotal(total + 5);
        }}
      >
        {" "}
        Inc
      </button>
    </>
  );
};

export default Basic01;
