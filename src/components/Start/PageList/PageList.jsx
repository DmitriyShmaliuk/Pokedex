import React from 'react';
import { observer, inject}  from 'mobx-react';
import Section from './Section/Section';
import './style.css';

const PagesList = inject('Store')(observer(props =>{
    const localStore = props.Store;

    //get sections for pagination
    const gettingSections = () =>{
        let arr = [];

        let i, nameOfClass = 'section';
        let range = (localStore.countOfCard !== 0)?Math.ceil(localStore.countOfCard/localStore.countOfPokemons) : localStore.countOfPokemons;

        if(localStore.countOfCard !== 0){
            if (localStore.page === 1)
                i = localStore.page;
            else
                i = localStore.page - 1;

            for(; i <localStore.page + 5 && i <=range; ++i){
                if(i === localStore.page)
                    nameOfClass = 'activeSection';
                else
                    nameOfClass = 'section';

                arr.push(<Section key = {'seaction' + i} nameOfClass = {nameOfClass} number = {i} />);
            }
        }

        return arr;
    }

    return (
        <div className = 'pagesList'>
            {   localStore.page>1 &&
                <div className = 'button' onClick = {localStore.BackPage}>
                     Back
                </div>
            }
            { gettingSections().map((el)=>el) }
            { localStore.page < Math.ceil(localStore.countOfCard/localStore.countOfPokemons) &&
                <div className = 'button' onClick = {localStore.NextPage}>
                    Next
                </div>
            }
        </div>
    )
}));

export default PagesList;