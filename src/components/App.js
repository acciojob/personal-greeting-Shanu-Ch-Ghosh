import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}

      <label htmlFor="box">Enter Your Name:</label>
      <br></br>
      <input type="text" id="box" onChange={(e) => {
        setName(e.target.value);
      }} />
      <p>{name && "Hello " + name + "!"}</p>
    </div>
  );
};

export default App;
