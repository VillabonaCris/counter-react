import React from "react";
import '../stylesheets/Contador.css'

const Contador = ({ numClick }) =>{
  return(
    <div className="count">
      {numClick}
    </div>
  )
}

export default Contador;