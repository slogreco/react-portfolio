import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron" id="jumbotron-style"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
