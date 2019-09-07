import React, {useEffect,useState}from 'react';
import {observer, inject} from 'mobx-react';
import './style.css';
import axios from 'axios';

const Filter = inject('Store')(observer (props=>{
    const localStore = props.Store;
    const [types, setTypes] = useState([]);

    useEffect(() =>{
        const GetTypes = async () =>{
            const res = await axios('https://pokeapi.co/api/v2/type');
            setTypes(res.data.results);
        };

        GetTypes();
    },[]);

    //search by type
    const filterSearch = () =>{
        let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
        localStore.filterPokemons = [];

        //get info about type
        const gettingTypeInfo = async (type, index) =>{
            const res = await axios (`https://pokeapi.co/api/v2/type/${type}/`);

            if(checkBoxes.length === 1 || localStore.filterPokemons.length === 0)
                res.data.pokemon.forEach(el => localStore.filterPokemons.push(el.pokemon)); 
            else if (checkBoxes.length > 1 && index !== 0){
                let result = [];

                localStore.filterPokemons.forEach(elOne => res.data.pokemon.forEach(elTwo => elOne.name === elTwo.pokemon.name 
                    && result.push(elOne)));
                localStore.filterPokemons = result;
            }

            localStore.showPokemons = localStore.filterPokemons.slice(0, localStore.countOfPokemons); 

            localStore.countOfCard = localStore.filterPokemons.length; 
            localStore.page = 1; 
        };

        if (checkBoxes.length !==0 )
            checkBoxes.forEach((el,index) => gettingTypeInfo(el.id, index));
        else{
            localStore.filterPokemons = [];
            localStore.GetPokemons();
        }
    };

    //clear filter form
    const clearFilterForm = () =>{
        let checkBoxes = document.querySelectorAll("input[type = 'checkbox']");
        document.querySelector('#search').value = '';

        checkBoxes.forEach(el => el.checked = false);
       
        localStore.filterPokemons = [];
        localStore.page = 1;
        localStore.GetPokemons();
    }

    return (
            <div className = 'filter'>
                <div className = 'header'>
                    <h1>Pokedex</h1>
                    <h4>Filter</h4>
                </div>

                <form onChange = {filterSearch}>
                    <div className = 'check'>
                        <div className = 'types'>
                            <h3>Types</h3>
                            <div className = "checkBoxes">
                                {types.map(el => <div key = {el.name}><input type = 'checkbox' name = {el.name} id = {el.name}/><span>{el.name}</span></div>)}
                            </div>

                        </div>
                    </div>
                </form>

                <div className = "clear" onClick = {clearFilterForm}>
                    Clear filter form
                </div>
            </div>
    );
}));

export default Filter;