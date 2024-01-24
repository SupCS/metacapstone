import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button disabled={props.disabled} className="button">
      {props.title}
    </button>
  );
};

export default Button;
