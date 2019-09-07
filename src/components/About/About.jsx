import React from 'react';
import { makeStyles } from '@material-ui/styles';

//set style for elements
const useStyle = makeStyles({
     info:{
      '& h1, & p':{
        margin: '30px',
        width: '85%',
      
        fontFamily: 'Arial, sans-serif',
      }
     }
});

const About = () =>{
    const classes = useStyle();

    return(
        <div className= {classes.info}>
                  <h1>About Pokedex</h1>
                  <p>
                    This is Pokedex, application about Pokemons...
                  </p>
                  <h1>About Pokemons</h1>
                  <p>Every Pokémon creature has an array of stats. HP (Hit Points) is a Pokémon's life force. If your Pokémon's HP hits zero,
                     it faints and is no longer usable in battle (it can still use Hidden Machines, though). The Speed stat decides which Pokémon
                     will make the first move in battle. This stat can be critical in long battles. <br /><br/>

                     Attack and Special Attack measure the strength of moves used by your Pokémon; the higher this is, the more damage you will do
                     to opponents. Attack corresponds to moves in the Physical category, while Special Attack corresponds to Special moves.<br /><br />

                     Similarly, Defense and Special Defense measure the ability to take attacks from other Pokémon; the higher the stat is, the
                     fewer Hit Points will be lost when attacked. Defense corresponds to moves in the Physical category, while Special Defense
                     corresponds to Special moves.
                  </p>
        </div>
    );
};

export default About;