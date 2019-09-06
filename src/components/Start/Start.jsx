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
        <div>
            <div>
                <SearchingForm/>
            </div>

            <div className = "start">
                { localStore.showPokemons.map((el) => 
                <Card name = {el.name} id = {el.url.slice(34,-1)}/>)}       
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