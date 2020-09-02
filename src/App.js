import React from "react";

import Button from "./Button";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Buttons</h1>

      <div className="section">
        <div className="btn-component">
          <p>&lt;Button /&gt;</p>
          <Button />
        </div>
      </div>

      <div className="section">
        <div className="btn-component">
          <p>&lt;Button varient ="outline" /&gt;</p>
          <Button varient="outline" />
        </div>
        <div className="btn-component">
          <p>&lt;Button varient ="text" /&gt;</p>
          <Button varient="text" />
        </div>
      </div>

      <div className="section">
        <div className="btn-component">
          <p>&lt;Button disabled /&gt;</p>
          <Button disabled />
        </div>
        <div className="btn-component">
          <p>&lt;Button varient ="text" disabled /&gt;</p>
          <Button varient="text" disabled />
        </div>
      </div>

      <div className="section">
        <div className="btn-component">
          <p>&lt;Button varient ="text" disabled /&gt;</p>
          <Button color="default" />
        </div>
        <Button color="primary">Primary</Button>
        <Button color="secondry">Secondry</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  );
};

export default App;
