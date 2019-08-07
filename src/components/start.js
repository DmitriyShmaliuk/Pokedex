import React from 'react';
import Card from './card';

export default class Start extends React.Component{
    state = {
        items: [],
        count: 0
    }

    componentWillMount (){
        var arr = [];
 
        for (var i =1;i<=807;++i)
        {
           fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
           .then(res => res.json())
           .then(result => {arr.push(result); this.setState({itesm: this.state.items = arr});console.log(this.state.items.length)});
        }
    }

    render(){
          return(
            <div className = "body">
                {this.state.items.slice(this.state.count, this.state.count+32).map((el) =>
                 <Card name = {el.name} front_default = {el.sprites.front_default}/>)}
                 Showed {this.state.count + 32} pokemons from {this.state.items.length}

                
            </div>
          )
    }
}