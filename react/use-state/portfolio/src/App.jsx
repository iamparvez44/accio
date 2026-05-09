import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


let App = ()=>{

    return (
        <div>
            <Navbar></Navbar>
            <About></About>
            <Skills main="Skills"></Skills>
            <Skills main="Qalification"></Skills>
            <Skills main="Projects"></Skills>
            <Footer></Footer>
        </div>
    )

}

export default App;