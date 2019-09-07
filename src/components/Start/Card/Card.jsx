import React from "react"
import Img from 'react-image'
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import './style.css';

//set style for elements
const useStyles = makeStyles (() => ({
    link:{
        'text-decoration': 'none',
    }
}))

const Card = (({name, idCard}) =>
{
   const classes = useStyles(); 
   const imgID= ((idCard / 100)>=1) ? idCard : ((idCard / 10) >= 1? '0' + idCard : '00' + idCard);  

   return (
        <Link  to = {`/pokemons/${idCard}/`} className = {classes.link} >
        <div className = "card">
            <div></div>
            <div className = "imgOfCard">
                <Img key = {imgID} className = 'img' alt = '' src = {`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgID}.png`}
                     loader = {<img src = 'http://gifimage.net/wp-content/uploads/2018/04/loading-gif-orange-8.gif'  alt = '' style = {{width: 80, height: 80}}/>}
                     unloader = {<img src = 'https://www.nocowboys.co.nz/images/v3/no-image-available.png'  alt = '' style = {{width: 100, height: 100}}/>} 
                     />
            </div>
             
            <div className = "textOfCard">
                <span className = "headCard">{name}</span>
            </div>
        </div> 
   </Link>
   );
});

export default Card;