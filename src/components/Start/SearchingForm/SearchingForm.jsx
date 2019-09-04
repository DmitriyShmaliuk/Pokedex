import React from 'react';
import {observer, inject} from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import FilterIcon from  '@material-ui/icons/FilterList';
import CloseIcon from  '@material-ui/icons/Close';
import FilterForm from './FilterForm/FilterForm';
import {makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles (themes => ({
    filterIcon:{
        '&:hover':{
            fill: "red",
            cursor: "pointer"
        }
    },
    filterForm: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        left: '95%',
        top: '65px',
        fill: '#ffffff',

        '&:hover':{
            fill: 'red',
            cursor: 'pointer',
        },
    },
}))

const SearchingForm = inject ('Store')(observer(props =>{
    const classes = useStyles();
    const localStore = props.Store;

    return(
        <div className = "searchingForm">
           <TextField id ="search" fullWidth autocomplete = 'off' placeholder = 'Searching Pokemons' name="search" onChange = {localStore.SearchAsName} />
           <FilterIcon className = {classes.filterIcon} onClick = {()=>{document.getElementsByClassName('filterForm')[0].style.display = "block"}}/>

           <div className = "filterForm">
                <div className = {classes.filterForm}>
                    <CloseIcon className = {classes.closeIcon} onClick = {()=>{document.getElementsByClassName('filterForm')[0].style.display = "none"}}/>
                    <FilterForm />
                </div>
            </div>

        </div>
    );
}));

export default SearchingForm;