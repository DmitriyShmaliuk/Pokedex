import React, {useContext} from "react"
import {observer} from 'mobx-react';
import Store from '../store/store';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles (themes => ({
    link:{
        'text-decoration': 'none',
    }
}))


const Card = observer(({name, front_default, id}) =>
{
   const classes = useStyles();
   const localStore = useContext(Store);

   return (
        <Link  to = {`/pokemons/${id}/`} className = {classes.link} onClick = {() => localStore.SettingPokemons (id)}>
        <div className = "card">
            <div></div>
            <div className = "img_of_card">
                <img src= {front_default}  alt = {name}/>
            </div>
             
            <div className = "text_of_card">
                <span className = "head_card">{name}</span>
            </div>
        </div> 
   </Link>
   );
});

export default Card;

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