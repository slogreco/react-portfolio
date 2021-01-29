import React from "react";
import "./style.css";

function CardBody({ children }) {
  return (
    <div
      className="card-body body-style"
    >
      {children}
    </div>
  );
}

export default CardBody;
