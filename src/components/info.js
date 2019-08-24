import React, {useContext} from 'react';
import Store from '../store/store';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react'
import Zoom from '@material-ui/core/Zoom';
import BackIcon from  '@material-ui/icons/ArrowBack';
  
const Info = observer((props)=>{
    const localStore = useContext(Store);

    localStore.SettingPokemons (props.match.params.number);

    return (
        <div className = "background_card">
               {localStore.pokemon.stats !== undefined &&
                 <div>
                     <Link to = '/' className = 'back_icon'><BackIcon /></Link>
                     <Zoom in = "true" timeout={{ enter: 500}}>   
                         <div className = "info_card">
                             <div className = "head">
                                 <div></div>
                                 <div>{localStore.pokemon.name.charAt(0).toUpperCase() + localStore.pokemon.name.slice(1)} </div>
                                 <div>#{localStore.pokemon.id}</div>
                             </div>
 
                             <div className = "types">
                                     <div className = "type one">{localStore.pokemon.types[0].type.name.toUpperCase()}</div>
 
                                     {
                                     localStore.pokemon.types[1] !== undefined &&
                                     <div className = "type two">{localStore.pokemon.types[1].type.name.toUpperCase()}</div>
                                     }
                                     
                             </div>
 
                             <div className = "main_info">
                                 <div className = 'image'>
                                         <img src = {localStore.pokemon.sprites.front_default} alt = {localStore.pokemon.name} />  
                                 </div>
 
                                 <div className = 'skils'>
                                     <div><span>HP:</span> <span className = "count">{localStore.pokemon.stats[5].base_stat}</span></div>
                                     <div><span>Attack:</span> <span className = "count">{localStore.pokemon.stats[4].base_stat}</span></div>
                                     <div><span>Speed:</span> <span className = "count">{localStore.pokemon.stats[0].base_stat}</span></div>
                                     <div><span>Defense:</span> <span className = "count">{localStore.pokemon.stats[3].base_stat}</span></div>
                                     <div><span>Sp Atk:</span> <span className = "count">{localStore.pokemon.stats[2].base_stat}</span></div>
                                     <div><span>Sp Def:</span> <span className = "count">{localStore.pokemon.stats[1].base_stat}</span></div>
                                 </div>
                             </div>
 
                             <div className = "profile">
                                 <h4>Additional information</h4>
 
                                 <div className = "info_profile">
                                     <div><span className = "prop">Weigth:</span><span className = "c_profile">{localStore.additionalInfo.weight / 10.0} kg</span></div>
                                     <div><span className = "prop">Height:</span><span className = "c_profile">{localStore.additionalInfo.height / 10.0} m</span></div>
 
                                     <div>
                                         <span className = "prop">Egg Groups:</span>
                                         <span className = "c_profile">
                                             {localStore.additionalInfo.egg_groups !== undefined &&
                                                     <span>{localStore.additionalInfo.egg_groups.map(el => el.name + ' ')}</span>
                                             }
                                             
                                         </span>
                                     </div>
 
                                     <div>
                                         <span className = "prop">Abilities:</span>
                                         <span className = "c_profile">
                                             {localStore.pokemon.ailities &&
                                                 localStore.pokemon.abilities[0].ability.name
                                             }
                                             {localStore.pokemon.abilities[1] &&
                                                 localStore.pokemon.abilities[1].ability.name
                                             }
                                         </span>
                                     </div>
                                     <div><span className = "prop">Capture rate:</span><span className = "c_profile">{localStore.additionalInfo.capture_rate}</span></div>
 
                                     <div><span className = "prop">Gender rate:</span><span className = "c_profile">{localStore.additionalInfo.gender_rate}</span></div>
                                     <div><span className = "prop">Base happiness:</span><span className = "c_profile">{localStore.additionalInfo.base_happiness}</span></div>
                                     <div><span className = "prop">Shape:</span>
                                             <span className = "c_profile">
                                             {localStore.additionalInfo.shape !== undefined &&
                                                 <span>{localStore.additionalInfo.shape.name}</span>}
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
});

export default Info;