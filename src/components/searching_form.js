import React from 'react';

import TextField from '@material-ui/core/TextField';

export default function SearchingForm ({searchingMethod}){
    return(
        <div className = "searching_form">
           <TextField id ="search" fullWidth placeholder = 'Searching Pokemons' name="search" onChange = {searchingMethod}/>
        </div>
    );
}