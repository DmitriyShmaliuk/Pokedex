import React from 'react';
import Card from './card';
import SearchingForm from './searching_form';

export default class Start extends React.Component{
    state = {
        items: [],
        show_arr: [],
        count: 32,
    }

    componentDidMount (){
        var arr = [];

        for (var i =1;i<=802;++i)
        {
           fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
           .then(res => res.json())
           .then(result => {arr.push(result); this.setState({items: arr, show_arr: arr})});
        }
    }

    gettingMore = () =>{
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
    }

    render(){
          return(
            <div className = "start">
                <div>
                    <SearchingForm searchingMethod = {this.searchAsName} filterMethod = {this.searchAsFilterMenu}/>
                </div>

                <div className = "body">
                    {this.state.show_arr.slice(0, this.state.count).map((el) => 
                    <Card name = {el.name} front_default = {el.sprites.front_default} id = {el.id}/>)}       
                </div>
                
                <div className = 'result_of_search'>
                    <p> Showed {(this.state.count>this.state.show_arr.length)?this.state.show_arr.length:this.state.count} pokemons from {this.state.show_arr.length}</p>

                    { 
                      this.state.count < this.state.show_arr.length &&
                      <p className = 'ref' onClick = {this.gettingMore}>More</p>
                    }
                </div>
            </div>
          )
    }
}