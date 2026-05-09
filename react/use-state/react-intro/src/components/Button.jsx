import React from "react";

const Button = (props) => {
  return (
    <div style={{ color: props.color, backgroundColor: "grey" }}>
      <button>{props.name}</button>
      <p>{props.color}</p>
      <p>{props.cost}</p>
    </div>
  );
};

export default Button;
