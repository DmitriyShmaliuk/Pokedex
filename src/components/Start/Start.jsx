import React from 'react';
import { observer, inject} from 'mobx-react';
import Card from './Card/Card';
import PagesList from './PageList/PageList';
import SearchingForm from './SearchingForm/SearchingForm';
import './style.css';

const Start = inject ('Store')(observer(props => {
    const localStore = props.Store;

    //change quantity of pokemons on page
    const changePokemonsCount = () =>{
        var count = document.getElementById('show').value;
        localStore.SetCountPokemons(count);
    }

    return(
        <div>
            <SearchingForm/>

            <div className = "start">
                { localStore.showPokemons.map((el) => 
                <Card key = {el.name} name = {el.name} idCard = {el.url.slice(34,-1)}/>)}       
            </div>

            <div className = 'resultOfSearch'>
                <PagesList />  

                <div className = 'props'>
                   <label>Show: <select id = 'show' onChange = {changePokemonsCount} defaultValue = {localStore.countOfPokemons}>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select></label>
                </div>
            </div>
        </div>
    )
}));

export default Start;