import React from "react";

let Section = ({ title, des }) => {
  return(
    <div>
    <h1>{title}</h1>
    <p>{des}</p>
    <hr />
  </div>
  )
};

export default Section;
