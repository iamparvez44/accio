import React, { useState } from 'react';

const App = () => {

const[num, setNum] = useState(0);


function update(){

    console.log("Y");

  setNum(prev=>{
    console.log("A")
    return prev
  })

  setNum(prev=>{
    console.log("B")
    return prev+1
  })
  setNum(prev=>{
    console.log("C")
    return prev
  })

  console.log("Z")


}


  return(
    <>
    <h1>{num}</h1>
    <button onClick={update} >Update Count</button>
      
    </>
  )
}
export default App;