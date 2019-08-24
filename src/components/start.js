import React from 'react';
import { useContext } from "react";
import { observer } from 'mobx-react';
import Card from './card';
import Store from '../store/store';
import Pages_list from './pages_list';
import SearchingForm from './searching_form';

const Start = observer((props) => {
    const localStore = useContext (Store);

    /*gettingMore = () =>{
        if (this.state.count + 32 < this.state.show_arr.length)
           this.setState({count: this.state.count + 32});
        else
            this.setState({count: this.state.show_arr.length});
    }

    searchAsName = () =>{
        var result = this.state.items.filter(el=>{return el.name.indexOf(document.getElementById('search').value) >=0});
        this.setState ({show_arr: result});
        
        if (result.length<32)
          this.setState ({count: result.length});

        if (document.getElementById('search').value.length === 0)
          this.setState({count: 32});
    }

    searchAsFilterMenu = event =>{
        var result = this.state.items.filter(el => {return  el.stats[5].base_stat >=  document.getElementById('hp').value});
        result = result.filter(el => {return el.stats[4].base_stat >=  document.getElementById('attack').value});
        result = result.filter(el => {return el.stats[0].base_stat >=  document.getElementById('speed').value});
        result = result.filter(el => {return el.stats[3].base_stat >=  document.getElementById('defense').value});

        const types = ['normal', 'flying', 'poison', 'ground', 'bug', 'fire', 'water', 'grass', 'figting', 'rock', 'ghost',
                     'steel', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'shadow'];

        var second_result = [];
        var state = false;

        for(var i in types){
              if(document.getElementById(types[i]).checked){
                state = true;

                second_result = second_result.concat(result.filter(el => {
                    return (el.types[1]) ? (el.types[0].type.name === types[i] || el.types[1].type.name === types[i]) 
                                         : (el.types[0].type.name === types[i]);
                }));
            }
        }
        
        if(second_result.length===0 && !state)
          second_result = result;

        (second_result.length<32) ?this.setState ({count: second_result.length}) : this.setState({count: 32});

        second_result = second_result.sort((a,b) => {return a.id - b.id});
        this.setState({show_arr: second_result});
    }*/

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
                <Card name = {el.name} front_default = {el.sprites.front_default} id = {el.id}/>)}       
            </div>

            <Pages_list />

            <div className = 'result_of_search'>
                <div className = 'pagination'>

                </div>

                <div className = 'props'>
                   <label>Show: <select id = 'show' onChange = {changePokemonsCount}>
                        <option>50</option>
                        <option>20</option>
                        <option>10</option>
                    </select></label>
                </div>
            </div>
        </div>
    )
});

export default Start;