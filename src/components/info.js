import React from 'react';

export default class Info extends React.Component{
    state = {
        info: {}
    }

    componentDidMount(){
        var ob;
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.number}/`)
        .then (res => res.json ())
        .then (result => {this.setState({info: result})});
    }
   render()
   {
       return (
       <div className = "start">
           Name: {this.state.info.name}
       </div>     
       );
   }
}