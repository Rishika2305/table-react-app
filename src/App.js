import "./App.css";
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Click me to change");
  const [count, setCount] = useState(1);

  const handleButtonClick = () => {
    console.log("Someone clicked me!!");
    setHeading("I've changed");
    setCount(count + 1);
  };

  return (
    <>
      <div className="main-container">
        <button onClick={handleButtonClick}>
          <h1 align="center">{heading}</h1>
        </button>
        <p>Button has been clicked {count} times</p>
      </div>
    </>
  );
}

export default App;
