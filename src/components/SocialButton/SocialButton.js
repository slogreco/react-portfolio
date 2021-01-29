import React from "react";
import "./style.css"

function SocialButton({ children }, props) {
  return (

    <button className={props.primary ? 'button--primary' : 'button'}>
      {children}
    </button>
  );
}

export default SocialButton;

