import React from 'react';
import {observer, inject} from 'mobx-react';
import './style.css';

const Filter = inject('Store')(observer (props=>{
    const localStore = props.Store;

    const types = ['normal', 'flying', 'poison', 'ground', 'bug', 'fire', 'water', 'grass', 'figting', 'rock', 'ghost',
    'steel', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'shadow'];

    return (
            <div className = 'filter'>
                <div className = 'header'>
                    <h1>Pokedex</h1>
                    <h4>Filter</h4>
                </div>

                <form onChange = {localStore.SearchAsFilterMenu}>
                    <div className = 'check'>
                        <div className = 'types'>
                            <h3>Types</h3>
                            <div className = "checkBoxes">
                            {types.map(el => <div><input type = 'checkbox' name = {el} id = {el}/><span>{el}</span></div>)}
                        </div>

                        <div className = "clear" onClick = {localStore.ClearFilterForm}>
                            Clear filter form
                        </div>
                    </div>
                    </div>
                </form>
            </div>
    );
}));

export default Filter;