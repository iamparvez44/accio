import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Branches from "./components/Branches"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>

    <Navbar></Navbar>
 
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="branches" element={<Branches/>} />

    </Routes>
     
    </>
  )
}

export default App
