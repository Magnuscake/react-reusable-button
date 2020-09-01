import React from "react";

import "./styles/Button.css";

const btnVarient = (varient) => {
  let styleClass = "";

  switch (varient) {
    case "primary":
      styleClass = "primary";
      break;

    case "secondry":
      styleClass = "secondry";
      break;

    case "danger":
      styleClass = "danger";
      break;

    default:
      return;
  }
  return styleClass;
};

const Button = (props) => {
  return (
    <div>
      <button className={btnVarient(props.color)}>
        {!props.text ? "Default" : props.text}
      </button>
    </div>
  );
};

export default Button;
