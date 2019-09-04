import React from 'react';
import {observer, inject} from 'mobx-react';

const Section = inject('Store')(observer(props =>{
    const localStore = props.Store;

    return (
        <div className = 'section' onClick = {() => localStore.SettingPage(props.number)}>
            {props.number}
        </div>
    )
}));

export default Section;