import React, { useContext } from 'react';
import Store from '../store/store';
import Section from './section';
import { observer } from 'mobx-react';

const PagesList = observer(() =>{
    const localStore = useContext (Store);

    const gettingSection = () =>{
        let arr = [];

       if(localStore.countOfCard !== 0)
       {
            if (localStore.page !==1 && localStore.countOfCard > 5){
                arr.push(<Section number= {1}/>);
                arr.push(<div className='section'>...</div>);
            }

            let i = localStore.page;

            for(; i <localStore.page + 5 && i< Math.ceil(localStore.countOfCard/localStore.countOfPokemons); ++i)
                arr.push(<Section number = {i}/>);

            if (localStore.page !== Math.ceil(localStore.countOfCard / localStore.countOfPokemons))
                arr.push(<div className='section'>...</div>);

            if(localStore.filterPokemons.length>localStore.countOfPokemons * (localStore.page+4))
                arr.push(<Section number= {Math.ceil(localStore.filterPokemons.length / localStore.countOfPokemons)}/>);
       }
       else
            arr.push(<Section number= {1}/>);

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

export default PagesList;