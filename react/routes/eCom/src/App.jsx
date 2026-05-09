import React from "react";
import { Routes, Route } from "react-router-dom";


import Clothes from "./components/Cloths.jsx";
import Shoes from "./components/Shoes.jsx";
import Products from "./components/Products.jsx";
import Electronics from "./components/Electronics.jsx";
import Navbar from "./components/Navbar.jsx";

let App = ()=>{

  return(
    <>

       <Navbar />

    <Routes>

      <Route path="/" element={<Products/>} />
      <Route path="/clothes" element={<Clothes/>} />
      <Route path="/shoes" element={<Shoes/>} />
      <Route path="/electronics" element={<Electronics/>} />

    </Routes>
    
    
    </>
  )

}

export default App;