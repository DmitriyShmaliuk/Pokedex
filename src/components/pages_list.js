import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import Store from '../store/store';
import Section from './section';

const Pages_list = observer(() =>{
    const localStore = useContext (Store);

    const gettingSection = () =>{
        var arr = [];

        if (localStore.page !== 1){
            arr.push(<Section number= {1}/>);
            arr.push(<div className='section'>...</div>);
        }

        for(var i = localStore.page; i <localStore.page + 10 && i< Math.ceil(localStore.showPokemons.length/localStore.countOfPokemons); ++i)
            arr.push(<Section number = {i}/>);

        if (localStore.page !== Math.ceil(localStore.showPokemons.length / localStore.countOfPokemons))
            arr.push(<div className='section'>...</div>);
        
            arr.push(<Section number= {Math.ceil(localStore.showPokemons.length / localStore.countOfPokemons)}/>);

        return arr;
    }
    return (
        <div className = 'pages_list'>
            {   localStore.page>1 &&
                <div className = 'button' onClick = {localStore.BackPage}>
                     Back
                </div>
            }
            { gettingSection().map((el)=>el) }
            { localStore.page < Math.ceil(localStore.countOfCard/localStore.countOfPokemons) &&
                <div className = 'button' onClick = {localStore.NextPage}>
                    Next
                </div>
            }
        </div>
    )
});

export default Pages_list;