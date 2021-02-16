import React from "react";
import "./style.css"

function FooterButton({ children }, props) {
  return (

    <button className={props.primary ? 'button--primary' : 'button'}>
      {children}
    </button>
  );
}

export default FooterButton;

