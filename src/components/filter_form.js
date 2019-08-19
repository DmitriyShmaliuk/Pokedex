import React from 'react';
import Zoom from '@material-ui/core/Zoom';

export default function Filter (){
    const types = ['normal', 'flying', 'poison', 'ground', 'bug', 'fire', 'water', 'grass', 'figting', 'rock', 'ghost',
                     'steel', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'shadow'];

    return (
        <Zoom in = "true" timeout={{ enter: 400}}>
            <div className = 'filter'>
                <div className = 'header'>
                    <h1>Pokedex</h1>
                    <h4>Filter</h4>
                </div>

                <form>
                    <div className = 'check'>
                        <div className = 'check_min'>
                            <div><span>Min HP: </span><input type='number' name = 'hp' autocomplete = 'off'/></div>
                            <div><span>Min Attack: </span><input type='number' name = 'attack' autocomplete = 'off'/></div>
                            <div><span>Min Speed: </span><input type='number' name = 'speed' autocomplete = 'off'/></div>
                            <div><span>Min Defense: </span><input type='number' name = 'defense' autocomplete = 'off'/></div>
                        </div>

                        <div className = 'types'>
                            <h3>Types</h3>
                            <div className = "checkBoxes">
                            {types.map(el => <div><input type = 'checkbox' name = {el}/><span>{el}</span></div>)}
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </Zoom>
    );
}