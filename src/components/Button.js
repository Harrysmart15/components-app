import React from "react";

 const Button = ({name,bgclr , clr,onlick})=> {
 return(
    <button 
    style={{backgroundColor:bgclr, color:clr}}
    className="my-btn"
    onClick={onclick}
    >{name}
    </button>
 ) 
   

 }

 export default Button