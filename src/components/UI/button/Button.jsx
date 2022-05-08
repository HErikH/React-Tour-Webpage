import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

let STYLES = ["btn_primary", "btn_outline"];

let SIZES = ["btn_medium", "btn_large"];

function Button({children, type, onClick, buttonStyle, buttonSize}) {
  let checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES[0];

  let checkButtonSize = SIZES.includes(buttonSize) 
  ? buttonSize 
  : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
