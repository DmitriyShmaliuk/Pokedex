import React, { createContext} from 'react';
import  { observable, decorate, action} from 'mobx';
import { array } from 'prop-types';

class Store{
    pokemons = new Array; //массив покемонов
    showPokemons = new Array; //массив показываемых покемонов
    pokemon = new Object; //объект текущего покемона
    page = 1; //текущая страница
    countOfPokemons = 50;
    countOfCard = 802;

    constructor (){
        for (var i =1;i<=this.countOfPokemons;++i)
        {
           fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
           .then(res => res.json())
           .then(result => {this.pokemons.push(result);this.showPokemons.push(result)});
        }
    }

    SetCountPokemons = (value = 50) =>{
        this.pokemons = [];
        this.showPokemons = [];
        this.countOfPokemons = value;

        for (var i =1;i<=this.countOfPokemons;++i)
        {
           fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
           .then(res => res.json())
           .then(result => {this.pokemons.push(result);this.showPokemons.push(result)});
        }
    }

    SearchAsName = () =>{
        var result = this.pokemons.filter(el=>{return el.name.indexOf(document.getElementById('search').value) >=0});
        this.showPokemons = result;

        if(document.getElementById('search').value === '')
          this.showPokemons = this.pokemons;
    }

    IncrementPage = (value = 1) =>{
        this.page = (value>0)?value: this.page;
    }

    NextPage = () =>{
        var count = this.page * this.countOfPokemons;
        this.pokemons = [];
        this.showPokemons = [];
        this.page++;

        for(;count< (this.page * this.countOfPokemons) && count <this.countOfCard; ++count)
        {
            fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`)
           .then(res => res.json())
           .then(result => {this.pokemons.push(result);this.showPokemons.push(result)});
        }
    }

    BackPage = () =>{
        this.pokemons = [];
        this.showPokemons = [];
        this.page--;

        var count = (this.page * this.countOfPokemons) - this.countOfPokemons;
        
        for(;count< (this.page * this.countOfPokemons) && count <this.countOfCard; ++count)
        {
            fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`)
           .then(res => res.json())
           .then(result => {this.pokemons.push(result);this.showPokemons.push(result)});
        }
    }

    SettingPage = (value = 1) =>{
        this.page = (value>0)?value : 1;

        var count = (this.page-1) * this.countOfPokemons;
        this.pokemons = [];
        this.showPokemons = [];

        console.log((this.page-1) * this.countOfPokemons);
        console.log(this.page * this.countOfPokemons);

        for(;count< (this.page * this.countOfPokemons) && count <=this.countOfCard; ++count)
        {
            fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`)
           .then(res => res.json())
           .then(result => {this.pokemons.push(result);this.showPokemons.push(result)});
        }
    }
}

decorate(Store, {
    pokemons: observable,
    showPokemons: observable,
    filterPokemons: observable,
    page: observable,
    countOfPokemons: observable,
    SetCountPokemons: action,
    SearchAsName: action,
    SettingPage: action,
    NextPage: action,
    BackPage: action,
});

export default createContext(new Store);