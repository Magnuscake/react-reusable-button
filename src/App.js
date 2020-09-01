import React from "react";

import Button from "./Button";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
      <h1>BUTTONS</h1>
      <div className="section">
        <Button text="Default" color="default" />
        <Button text="Primary" color="primary" />
        <Button text="Secondry" color="secondry" />
        <Button text="Danger" color="danger" />
      </div>
    </div>
  );
};

export default App;
