import React from "react"
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default function Card ({name, front_default, id})
{
   return (
    <div className = "card">
        <div></div>
        <div className = "img_of_card">
            <img src= {front_default}  alt = {name}/>
        </div>
             
        <div className = "text_of_card">
            <Link  className = "head_card" to = {`/pokemons/${id}/`}>{name}</Link>
        </div>
   </div> 
   );
}

Card.propTypes = {
    name: PropTypes.string,
    fron_default: PropTypes.string,
    id: PropTypes.number
}


Card.defaultProps = {
    name: 'Name of pokemon',
    front_default: '',
    id: 0
}