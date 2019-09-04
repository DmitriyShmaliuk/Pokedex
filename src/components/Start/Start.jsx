import React from 'react';
import { observer, inject} from 'mobx-react';
import Card from './Card/Card';
import PagesList from './PageList/PageList';
import SearchingForm from './SearchingForm/SearchingForm';
import './style.css';

const Start = inject ('Store')(observer(props => {
    const localStore = props.Store;

    const changePokemonsCount = () =>{
        var count = document.getElementById('show').value;
        localStore.SetCountPokemons(count);
    }

    return(
        <div className = "start">
            <div>
                <SearchingForm/>
            </div>

            <div className = "body">
                { localStore.showPokemons.map((el) => 
                <Card name = {el.name} front_default = {el.front_default} id = {el.id}/>)}       
            </div>

            <div className = 'resultOfSearch'>
                <div>
                    <PagesList />  
                </div>

                <div className = 'props'>
                   <label>Show: <select id = 'show' onChange = {changePokemonsCount}>
                        <option>10</option>
                        <option selected>20</option>
                        <option>50</option>
                    </select></label>
                </div>
            </div>
        </div>
    )
}));

export default Start;