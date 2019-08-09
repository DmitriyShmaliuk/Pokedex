import React from 'react';
import Card from './card';
import SearchingForm from './searching_form';

export default class Start extends React.Component{
    state = {
        items: [],
        show_arr: [],
        count: 40,
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
        if (this.state.count + 40 < this.state.show_arr.length)
           this.setState({count: this.state.count + 40});
        else
            this.setState({count: this.state.show_arr.length});
    }

    searchAsName = (event) =>{
        var result = this.state.items.filter((el)=>{return el.name.indexOf(document.getElementById('search').value) >=0});
        this.setState({show_arr: result});
    }

    render(){
          return(
            <div className = "start">
                <div>
                 <SearchingForm searchingMethod = {this.searchAsName}/>
                </div>

                <div className = "body">
                    {this.state.show_arr.slice(0, this.state.count).map((el) => 
                    <Card name = {el.name} front_default = {el.sprites.front_default} id = {el.id}/>)}                
                </div>
                
                <div className = 'result_of_search'>
                    <p> Showed {this.state.count} pokemons from {this.state.show_arr.length}</p>

                    { 
                      this.state.count < this.state.show_arr.length &&
                      <p className = 'ref' onClick = {this.gettingMore}>More</p>
                    }
                </div>
                
            </div>
          )
    }
}