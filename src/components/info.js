import React from 'react';
import {Link} from 'react-router-dom';
import Zoom from '@material-ui/core/Zoom';
import BackIcon from  '@material-ui/icons/ArrowBack';
  
export default class Info extends React.Component{
    state = {
        info: {},
        add_info: {},
    }

    componentDidMount(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.number}/`)
        .then (res => res.json ())
        .then (result => {this.setState({info: result})});

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.props.match.params.number}/`)
        .then(res => res.json())
        .then(result => {this.setState({add_info: result})});
    }

   render()
   {
       return (
       <div className = "background_card">
              {this.state.info.stats !== undefined &&
                <div>
                    <Link to = '/' className = 'back_icon'><BackIcon /></Link>
                    <Zoom in = "true" timeout={{ enter: 500}}>   
                        <div className = "info_card">
                            <div className = "head">
                                <div></div>
                                <div>{this.state.info.name.charAt(0).toUpperCase() + this.state.info.name.slice(1)} </div>
                                <div>#{this.state.info.id}</div>
                            </div>

                            <div className = "types">
                                    <div className = "type one">{this.state.info.types[0].type.name.toUpperCase()}</div>

                                    {
                                    this.state.info.types[1] !== undefined &&
                                    <div className = "type two">{this.state.info.types[1].type.name.toUpperCase()}</div>
                                    }
                                    
                            </div>

                            <div className = "main_info">
                                <div className = 'image'>
                                        <img src = {this.state.info.sprites.front_default} alt = {this.state.info.name} />  
                                </div>

                                <div className = 'skils'>
                                    <div><span>HP:</span> <span className = "count">{this.state.info.stats[5].base_stat}</span></div>
                                    <div><span>Attack:</span> <span className = "count">{this.state.info.stats[4].base_stat}</span></div>
                                    <div><span>Speed:</span> <span className = "count">{this.state.info.stats[0].base_stat}</span></div>
                                    <div><span>Defense:</span> <span className = "count">{this.state.info.stats[3].base_stat}</span></div>
                                    <div><span>Sp Atk:</span> <span className = "count">{this.state.info.stats[2].base_stat}</span></div>
                                    <div><span>Sp Def:</span> <span className = "count">{this.state.info.stats[1].base_stat}</span></div>
                                </div>
                            </div>

                            <div className = "profile">
                                <h4>Additional information</h4>

                                <div className = "info_profile">
                                    <div><span className = "prop">Weigth:</span><span className = "c_profile">{this.state.info.weight / 10.0} kg</span></div>
                                    <div><span className = "prop">Height:</span><span className = "c_profile">{this.state.info.height / 10.0} m</span></div>

                                    <div>
                                        <span className = "prop">Egg Groups:</span>
                                        <span className = "c_profile">
                                            {this.state.add_info.egg_groups !== undefined &&
                                                    <span>{this.state.add_info.egg_groups.map(el => el.name + ' ')}</span>
                                            }
                                            
                                        </span>
                                    </div>

                                    <div>
                                        <span className = "prop">Abilities:</span>
                                        <span className = "c_profile">
                                            {this.state.info.abilities[0] &&
                                                this.state.info.abilities[0].ability.name
                                            }
                                            {this.state.info.abilities[1] &&
                                                this.state.info.abilities[1].ability.name
                                            }
                                        </span>
                                    </div>
                                    <div><span className = "prop">Capture rate:</span><span className = "c_profile">{this.state.add_info.capture_rate}</span></div>

                                    <div><span className = "prop">Gender rate:</span><span className = "c_profile">{this.state.add_info.gender_rate}</span></div>
                                    <div><span className = "prop">Base happiness:</span><span className = "c_profile">{this.state.add_info.base_happiness}</span></div>
                                    <div><span className = "prop">Shape:</span>
                                            <span className = "c_profile">
                                            {this.state.add_info.shape !== undefined &&
                                                <span>{this.state.add_info.shape.name}</span>}
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Zoom> 
                </div>
              }
       </div> 
       );
   }
}