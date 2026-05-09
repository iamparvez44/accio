import React from "react";

import User from "./components/Users";
import { Route, Routes } from "react-router-dom";
import People from "./components/People";

let App = ()=>{


  return(
    <>

      <Routes>

      {/* <Route path="/user/:id" element= {<User/>} /> */}

      <Route path="/people" element= {<People></People>}/>

      </Routes>

    </>
  )
}

export default App;