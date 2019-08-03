import React from "react"
import PropTypes from "prop-types";

export default function Card ({name, front_default})
{
   return (
    <div className = "card">
        <div></div>
        <div className = "img_of_card">
            <img src= {front_default}  alt = {name}/>
        </div>
             
        <div className = "text_of_card" aria-controls="info_pok" >
            <span>{name} </span>
        </div>
   </div> 
   );
}

Card.propTypes = {
    name: PropTypes.string,
    fron_default: PropTypes.string
}


Card.defaultProps = {
    name: 'Name of pokemon',
    front_default: ''
}