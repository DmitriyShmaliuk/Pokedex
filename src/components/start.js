import React from 'react';
import Card from './card';

export default class Start extends React.Component{
    state = {
        items: [],
        count: 32,
    }

    componentDidMount (){
        var arr = [];
 
        for (var i =1;i<=802;++i)
        {
           fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
           .then(res => res.json())
           .then(result => {arr.push(result); this.setState({itesm: this.state.items = arr});console.log(this.state.items.length)});
        }
    }

    gettingMore = () =>{
        if (this.state.count + 32 < this.state.items.length)
           this.setState({count: this.state.count + 32});
        else
            this.setState({count: this.state.items.length});
    }

    render(){
          return(
            <div>
                <div className = "body">
                    {this.state.items.slice(0, this.state.count).map((el) => 
                    <Card name = {el.name} front_default = {el.sprites.front_default}/>)}                
                </div>
                
                <div className = 'result_of_search'>
                    <p> Showed {this.state.count} pokemons from {this.state.items.length}</p>

                    { 
                      this.state.count < 802 &&
                      <p className = 'ref' onClick = {this.gettingMore}>More</p>
                    }
                </div>
                
            </div>
          )
    }
}