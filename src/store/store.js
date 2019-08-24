import React, { createContext} from 'react';
import  { observable, decorate, action} from 'mobx';

class Store{
    pokemons = new Array; //массив покемонов
    showPokemons = new Array; //массив показываемых покемонов
    pokemon = new Object; //объект текущего покемона
    page = 1; //текущая страница
    countOfPokemons = 50;

    constructor (){
        for (var i =1;i<= this.countOfPokemons;++i)
        {
           fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
           .then(res => res.json())
           .then(result =>{this.showPokemons.push(result)});
        }

        for (var i =1;i<= 802;++i)
        {
           fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
           .then(res => res.json())
           .then(result =>{this.pokemons.push(result)});
        }
    }

    SetCountPokemons = (value = 50) =>{
        var count = this.countOfPokemons * this.page;
        this.showPokemons = this.pokemons.slice(count-this.countOfPokemons,count);
        this.countOfPokemons = value;
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
}

decorate(Store, {
    pokemons: observable,
    showPokemons: observable,
    SetCountPokemons: action,
    SearchAsName: action,
});

var store = new Store;
export default createContext(store);