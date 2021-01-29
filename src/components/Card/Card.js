import React from "react";
import "./style.css";

function Card({ children }) {
  return (
    <div
      className="card card-style"
    >
      {children}
    </div>
  );
}

export default Card;
