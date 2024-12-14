import React from "react";
import "./button.css";

const Button = ({ label, onClick, type = "button", variant = "primary" }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
