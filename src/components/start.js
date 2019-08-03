import React from 'react';
import Card from './card';

export default class Start extends React.Component{
    state = {
        items: [],
        count: 1
    }

    componentDidMount (){
        var arr = [];
 
        for (var i =1;i<=32;++i)
        {
           fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
           .then(res => res.json())
           .then(result => {arr.push(result); this.setState({itesm: this.state.items = arr});console.log(this.state.items.length)});
        }

        this.setState({count: 33});
    }

    render(){
          return(
            <div className = "body">
                {this.state.items.map((el) =>
                 <Card name = {el.name} front_default = {el.sprites.front_default}/>)}
            </div>
          )
    }
}