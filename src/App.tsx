import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState(
    "A really long test input you can generate. Some times is better to just think about stuuf that happens, and in some cases let it go... "
  );

  useEffect(() => {}, []);

  const handlechange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (text.split(" ").length === 1) {
    }

    if (e.key == " ") {
      console.log(text);
      if (text.split(" ")[0] === input.slice(0, input.length - 1)) {
        setText(text.slice(input.length, text.length));
        console.log(text);
        setInput("");
      }
    }
  };

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <p>{text}</p>
      <input
        onKeyUp={(e) => handlechange(e)}
        onChange={(e) => {
          updateInput(e);
        }}
        value={input}
      ></input>
    </div>
  );
}

export default App;
