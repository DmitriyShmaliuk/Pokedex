import React, { useContext } from 'react';
import Store from '../store/store';
import {observer} from 'mobx-react';

const Section = observer (({number}) =>{
    const localStore = useContext(Store);

    const changePage = () =>{
        localStore.SettingPage(number);
    }

    return (
        <div className = 'section' onClick = {changePage}>
            {number}
        </div>
    )
});

export default Section;