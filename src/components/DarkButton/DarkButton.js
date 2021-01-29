import React from "react";
import "./style.css"

const  DarkButton = ({ children }, props) => {
  return (
    <div>
      <button type="button" class="btn btn-lg btn-block drk-button">
        {children}
      </button>

    </div>
  );
}

export default DarkButton;

