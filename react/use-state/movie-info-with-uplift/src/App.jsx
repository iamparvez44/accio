import React, { useState } from "react";
import DisplayList from "./Components/DisplayList";
import DisplayImg from "./Components/DisplayImg";

let App = () => {
  let [displayInfo, setDisplayInfo] = useState(null);

  return (
    <>
      <DisplayList setDisplayInfo={setDisplayInfo} />

      {displayInfo && (
        <DisplayImg displayInfo={displayInfo} />
      )}
    </>
  );
};

export default App;