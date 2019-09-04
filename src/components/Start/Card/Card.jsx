import React, {useState}from "react"
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import './style.css';

//задать стили для элемента
const useStyles = makeStyles (() => ({
    link:{
        'text-decoration': 'none',
    }
}))

const Card = (({name, id}) =>
{
   const classes = useStyles(); 
   const [imgID]= useState(((id / 100)>=1) ? id : ((id / 10) >= 1? '0' + id : '00' + id));  

   return (
        <Link  to = {`/pokemons/${id}/`} className = {classes.link} >
        <div className = "card">
            <div></div>
            <div className = "imgOfCard">
                <img src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + imgID + '.png'}  alt = {name}/>
            </div>
             
            <div className = "textOfCard">
                <span className = "headCard">{name}</span>
            </div>
        </div> 
   </Link>
   );
});

export default Card;

Card.propTypes = {
    name: PropTypes.string,
    fron_default: PropTypes.string,
    id: PropTypes.number,
}

Card.defaultProps = {
    name: 'Name of pokemon',
    front_default: '',
    id: 0,
}