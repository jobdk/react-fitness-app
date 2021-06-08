import React from "react";
import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn">
        {text}
      </button>
    </div>
  );
};

export default Button;
