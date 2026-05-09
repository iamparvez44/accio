import React from "react";
import { Link } from "react-router-dom";

let Navbar = ()=>{

    return(
        <>

            <ul>

                <li>
                    <Link to= "/" >Home</Link>
                </li>
                <li>
                    <Link to= "about" >About</Link>
                </li>
                <li>
                    <Link to= "branches" >Branches</Link>
                </li>

            </ul>

        </>
    )

}

export default Navbar;