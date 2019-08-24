import React from 'react';

export default function Filter ({filterMethod}){
    const types = ['normal', 'flying', 'poison', 'ground', 'bug', 'fire', 'water', 'grass', 'figting', 'rock', 'ghost',
                     'steel', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'shadow'];

    return (
            <div className = 'filter'>
                <div className = 'header'>
                    <h1>Pokedex</h1>
                    <h4>Filter</h4>
                </div>

                <form onChange = {filterMethod}>
                    <div className = 'check'>
                        <div className = 'check_min'>
                            <div><span>Min HP: </span><input type='number' name = 'hp' id = 'hp'/></div>
                            <div><span>Min Attack: </span><input type='number' name = 'attack' id ='attack'/></div>
                            <div><span>Min Speed: </span><input type='number' name = 'speed' id = 'speed'/></div>
                            <div><span>Min Defense: </span><input type='number' name = 'defense' id= 'defense'/></div>
                        </div>

                        <div className = 'types'>
                            <h3>Types</h3>
                            <div className = "checkBoxes">
                            {types.map(el => <div><input type = 'checkbox' name = {el} id = {el}/><span>{el}</span></div>)}
                        </div>
                    </div>
                    </div>
                </form>
            </div>
    );
}