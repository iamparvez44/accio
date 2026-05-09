import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Cloths from "./components/Cloths";
import Navbar from "./components/Navbar";
import Electronics from "./components/Electronics";
import Shoes from "./components/Shoes";
import Foods from "./components/Foods";

let App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>

          <Route path="cloths" element={<Cloths />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="foods" element={<Foods />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
