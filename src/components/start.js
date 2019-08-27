import React from 'react';
import { useContext } from "react";
import { observer } from 'mobx-react';
import Card from './card';
import Store from '../store/store';
import PagesList from './pages_list';
import SearchingForm from './searching_form';

const Start = observer(() => {
    const localStore = useContext (Store);

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

            <div className = 'result_of_search'>
                <div className = 'pagination'>
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
});

export default Start;