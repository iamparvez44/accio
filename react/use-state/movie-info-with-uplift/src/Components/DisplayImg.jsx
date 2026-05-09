import React from "react";

let DisplayImg = ({displayInfo})=>{
    return (
        <>

             {
        displayInfo &&
      <img src={displayInfo.pic} alt={displayInfo.name} />
        }
        
        </>
    )
}

export default DisplayImg;