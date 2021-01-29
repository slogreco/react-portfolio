import React from "react";
import "./style.css";

function CardHeader({ children }) {
  return (
    <div
      className="card-header header-style"
    >
      {children}
    </div>
  );
}

export default CardHeader;
