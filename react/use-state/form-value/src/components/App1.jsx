import React, { useState } from "react";

let App1 = () => {
  let [inputText, setInputText] = useState("");
  let [finalText, setFianlText] = useState("");

  function updateText(e) {
    setInputText(e.target.value);
    setFianlText("");
  }

  function handleText(e) {
    e.preventDefault();

    setFianlText(inputText);
    setInputText("")
  }

  return (
    <div>
      <form onSubmit={handleText}>
        <input type="text" onChange={updateText} value={inputText}/>
        <button>submit</button>

        <p>Value: {finalText}</p>
      </form>
    </div>
  );
};

export default App1;
