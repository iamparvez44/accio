import React, { useState } from "react";

let App = () => {
  let [text, setText] = useState("");
  let [submitText, setSubmitText] = useState("");

  function updateText(e) {
    let val = e.target.value;

    setText(val);

    submitText("");
  }

  function show(e) {
    e.preventDefault();

    setSubmitText(text);
    setText("");
  }
  return (
    <div>
      <form onSubmit={show}>
        <input type="text" onChange={updateText} value={text} />
        <button>submit</button>
        <p>{submitText}</p>
      </form>
    </div>
  );
};

export default App;
