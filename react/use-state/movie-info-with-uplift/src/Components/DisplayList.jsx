import React from "react";
import moviesData from "../Data/data";

let DisplayList = ({ setDisplayInfo }) => {
  function handleInfo(item) {
    setDisplayInfo(item);
  }

  return (
    <>
      <ul>
        {moviesData.map((item) => {
          return (
            <li
              key={item.name}
              onClick={() => handleInfo(item)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DisplayList;