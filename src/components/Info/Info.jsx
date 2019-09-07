import React, {useEffect}from 'react';
import { inject, observer} from 'mobx-react';
import Img from 'react-image';
import Zoom from '@material-ui/core/Zoom';
import './style.css';

const Info = inject('Store')(observer(props =>{
    const localStore = props.Store;
    const imgID = ((localStore.pokemonInfo.id / 100)>=1) ? localStore.pokemonInfo.id : ((localStore.pokemonInfo.id / 10) >= 1? '0' + 
    localStore.pokemonInfo.id : '00' + localStore.pokemonInfo.id);

    useEffect(() =>{
        localStore.GettingInfo(props.match.params.number);
    },[props.match.params.number]);

    return(
        <div className = "backgroundCard">
               {localStore.pokemonInfo.stats !== undefined &&
                <div>
                    <Zoom in = "true" timeout={{ enter: 300}}>   
                        <div className = "infoCard">
                            <div className = "head">
                                <div></div>
                                <div>{localStore.pokemonInfo.name.charAt(0).toUpperCase() + localStore.pokemonInfo.name.slice(1)} </div>
                                <div>#{localStore.pokemonInfo.id}</div>
                            </div>

                             <div className = "types">
                                    <div className = "type one">{localStore.pokemonInfo.types[0].type.name.toUpperCase()}</div>

                                    {
                                        localStore.pokemonInfo.types[1] !== undefined &&
                                        <div className = "type two">{localStore.pokemonInfo.types[1].type.name.toUpperCase()}</div>
                                    }
                                    
                            </div>

                            <div className = "mainInfo">
                                <div className = 'image'>
                                    <Img className = 'img' alt = '' src = {`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgID}.png`}
                                        loader = {<img src = 'http://gifimage.net/wp-content/uploads/2018/04/loading-gif-orange-8.gif'  alt = '' style = {{width: 170, 'margin-bottom': 10}}/>}
                                        unloader = {<img src = 'https://straand.no/wp-content/uploads/2017/03/3244-300x300.png'  alt = '' style = {{width: 170, 'margin-bottom': 10}}/>} 
                                        />
                                </div>

                                <div className = 'skils'>
                                    <div><span>HP:</span> <span className = "count">{localStore.pokemonInfo.stats[5].base_stat}</span></div>
                                    <div><span>Attack:</span> <span className = "count">{localStore.pokemonInfo.stats[4].base_stat}</span></div>
                                    <div><span>Speed:</span> <span className = "count">{localStore.pokemonInfo.stats[0].base_stat}</span></div>
                                    <div><span>Defense:</span> <span className = "count">{localStore.pokemonInfo.stats[3].base_stat}</span></div>
                                    <div><span>Sp Atk:</span> <span className = "count">{localStore.pokemonInfo.stats[2].base_stat}</span></div>
                                    <div><span>Sp Def:</span> <span className = "count">{localStore.pokemonInfo.stats[1].base_stat}</span></div>
                                </div>
                            </div>
                        </div> 
                </Zoom> 
                </div>
              }
       </div> 
    );
}));

export default Info;