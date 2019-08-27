import React, { useContext } from 'react';
import Store from '../store/store';
import {observer} from 'mobx-react';

const Section = observer (({number}) =>{
    const localStore = useContext(Store);

    return (
        <div className = 'section' onClick = {() => localStore.SettingPage(number)}>
            {number}
        </div>
    )
});

export default Section;