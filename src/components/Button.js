import React from "react";
import '../stylesheets/Button.css'

const Button = ({ text, isButtonClick, handleClick }) => {
  return(
    <button
      className={ isButtonClick ? 'click-button' : 'reset-button' }
      onClick={handleClick}>
      {text}
    </button>
  )
}


export default Button;