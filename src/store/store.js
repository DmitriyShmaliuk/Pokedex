import React, { createContext} from 'react';
import  { observable, decorate, action} from 'mobx';
import { array } from 'prop-types';

class Store{
    pokemons = new Array; //массив покемонов
    showPokemons = new Array; //массив показываемых покемонов
    filterPokemons = new Array;
    pokemon = new Object; //текущий покемона
    additionalInfo = new Object;
    page = 1; //текущая страница
    countOfPokemons = 50;
    countOfCard = 802;
    types = ['normal', 'flying', 'poison', 'ground', 'bug', 'fire', 'water', 'grass', 'figting', 'rock', 'ghost',
    'steel', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'shadow'];

    constructor (){
       this.InitialPokemons();
    }
    
    InitialPokemons = async () =>{
        var API_URL,data;

        for (var i=1; i<=802;++i){
            API_URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            data = await API_URL.json();

            this.pokemons.push(data);

            if(i<=this.countOfPokemons)
              this.showPokemons.push(data);
        }
    }

    SetCountPokemons = (value = 50) =>{
        this.countOfPokemons = value;
        this.showPokemons = this.pokemons.slice(0,this.countOfPokemons);
    }

    SearchAsName = () =>{
    }

    SearchAsFilterMenu = () =>{
    }

    NextPage = () =>{
        var start = this.countOfPokemons * this.page;
        var end = this.countOfPokemons * ++this.page;

        this.showPokemons = this.pokemons.slice(start,end);
    }

    BackPage = () =>{
        var end = this.countOfPokemons * --this.page;
        var start = (this.countOfPokemons * this.page) - this.countOfPokemons;

        this.showPokemons = this.pokemons.slice(start,end);
        console.log(start + ' ' + end);
    }

    SettingPage = (value = 1) =>{
        this.page = (value>0)?value : 1;

        var start = (this.page * this.countOfPokemons) - this.countOfPokemons;
        var end = this.page * this.countOfPokemons; 

        console.log(start + ' ' + end );

        this.showPokemons = this.pokemons.slice(start,end);
        console.log(this.pokemons.length);
    }

    SettingPokemons = (value = 1) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
        .then (res => res.json ())
        .then (result => this.pokemon = result);

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${value}/`)
        .then(res => res.json())
        .then(result => this.additionalInfo = result);
    }
}

decorate(Store, {
    pokemons: observable,
    showPokemons: observable,
    additionalInfo: observable,
    page: observable,
    countOfPokemons: observable,
    SetCountPokemons: action,
    SearchAsName: action,
    SettingPage: action,
    NextPage: action,
    BackPage: action,
});

export default createContext(new Store);