import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const handleMassage = (massage) => {
    setGreeting(massage);
  };
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={() => handleMassage("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleMassage("Hi!")}>Hi!</button>
        <button onClick={() => handleMassage("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
