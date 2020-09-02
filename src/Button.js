import React from "react";

import "./styles/Button.css";

const Button = ({
  color,
  varient,
  children,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
}) => {
  const usePrimary = startIcon || endIcon || size ? "primary" : null;
  return (
    <div>
      <button
        className={`btn ${color} ${varient} ${size} ${usePrimary}`}
        disabled={disabled}
        style={{ boxShadow: !disableShadow ? null : "none" }}
      >
        <i className="material-icons">{startIcon}</i>
        &nbsp;
        {!children ? "Default" : children}
        &nbsp;
        <i className="material-icons">{endIcon}</i>
      </button>
    </div>
  );
};

export default Button;
