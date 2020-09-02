import React from "react";

import "./styles/Button.css";

const btnColor = (color) => {
  let colorClass = "";

  switch (color) {
    case "primary":
      colorClass = "primary";
      break;

    case "secondry":
      colorClass = "secondry";
      break;

    case "danger":
      colorClass = "danger";
      break;

    default:
      return;
  }
  return colorClass;
};

const btnVarient = (varient) => {
  let varientClass = "";

  switch (varient) {
    case "outline":
      varientClass = "outline";
      break;

    case "text":
      varientClass = "text";
      break;

    default:
      return;
  }
  return varientClass;
};

const Button = ({ color, varient, children, disabled }) => {
  return (
    <div>
      <button
        className={`${btnColor(color)} || ${btnVarient(varient)}`}
        disabled={disabled}
      >
        {!children ? "Default" : children}
      </button>
    </div>
  );
};

export default Button;
