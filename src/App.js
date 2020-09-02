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
          <p>&lt;Button disableShadow /&gt;</p>
          <Button disableShadow />
        </div>
      </div>

      {/* Button with varients */}
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

      {/* Button with icons */}
      <div className="section">
        <div className="btn-component">
          <p>&lt;Button startIcon="local_grocery_store" /&gt;</p>
          <Button startIcon="local_grocery_store" />
        </div>
        <div className="btn-component">
          <p>&lt;Button endIcon="local_grocery_store" /&gt;</p>
          <Button endIcon="local_grocery_store" />
        </div>
      </div>

      {/* Button with size */}
      <div className="section">
        <div className="btn-component">
          <p>&lt;Button size="sm" /&gt;</p>
          <Button size="sm" />
        </div>
        <div className="btn-component">
          <p>&lt;Button size="md" /&gt;</p>
          <Button size="md" />
        </div>
        <div className="btn-component">
          <p>&lt;Button size="lg" /&gt;</p>
          <Button size="lg" />
        </div>
      </div>

      <div className="section">
        <div className="btn-component">
          <p>&lt;Button color ="default" /&gt;</p>
          <Button color="default" />
        </div>
        <div className="btn-component">
          <p>&lt;Button color ="primary" /&gt;</p>
          <Button color="primary">Primary</Button>
        </div>
        <div className="btn-component">
          <p>&lt;Button color ="secondry" /&gt;</p>
          <Button color="secondry">Secondry</Button>
        </div>
        <div className="btn-component">
          <p>&lt;Button color ="danger" /&gt;</p>
          <Button color="danger">Danger</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
