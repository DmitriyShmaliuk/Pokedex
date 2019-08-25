import { createContext} from 'react';
import  { observable, decorate, action} from 'mobx';

class Store{
    pokemons = []; //массив покемонов
    filterPokemons = [];
    showPokemons = []; //массив показываемых покемонов
    pokemon = {}; //текущий покемона
    additionalInfo = {};
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

            this.showPokemons.push(data);
        }

        this.showPokemons.map(el => this.pokemons.push(el));
    }

    SetCountPokemons = (value = 50) =>{
        this.countOfPokemons = value;
    }

    SearchAsName = () =>{
    }

    SearchAsFilterMenu = () =>{
    }

    NextPage = () =>{
       this.page++;
    }

    BackPage = () =>{
        this.page--;
    }

    SettingPage = (value = 1) =>{
        this.page = (value>0)?value : 1;
    }

    SettingPokemons = async(value = 1) =>{
        var API_URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`);
        var data = await API_URL.json();
        this.pokemon = data;


        API_URL = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${value}/`);
        data = await API_URL.json();
        this.additionalInfo = data;
    }
}

decorate(Store, {
    pokemons: observable,
    showPokemons: observable,
    pokemon: observable,
    additionalInfo: observable,
    page: observable,
    countOfPokemons: observable,
    countOfCard: observable,
    types: observable,

    InitialPokemons: action,
    SetCountPokemons: action,
    SearchAsName: action,
    SearchAsFilterMenu:action,
    NextPage: action,
    BackPage: action,
    SettingPage: action,
    SettingPokemons:action
});

export default createContext(new Store());