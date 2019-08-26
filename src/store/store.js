import { createContext} from 'react';
import  { decorate, action, extendObservable} from 'mobx';

class Store{
    constructor (){
        extendObservable(this, {
            pokemons: [], //массив покемонов
            showPokemons: [], //массив показываемых покемонов
            filterPokemons: [], //массив фильтрированных покемонов
            page: 1, //текущая страница
            countOfPokemons: 50, //количество покемонов на странице
            countOfCard: 802, //количество покемонов
        });

        //инициализация начального массива покемонов (работа с API)
        for(var i=1;i<=this.countOfPokemons;++i){
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then(res => res.json())
            .then(result => {this.showPokemons.push({name: result.name,
                                                     id: result.id,
                                                     front_default: result.sprites.front_default,
                                                     stats: result.stats,
                                                     types: result.types,
                                                    })});
        }

        this.InitialPokemons();
    }
    
    //инициализация базы покемонов (работа с API)
    InitialPokemons = async () =>{
        var API_URL,data;

        for (let i=1; i<=802;++i){
            API_URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            data = await API_URL.json();

            this.pokemons.push({name: data.name,
                                id: data.id,
                                front_default: data.sprites.front_default,
                                stats: data.stats,
                                types: data.types,
                              });
            this.filterPokemons.push({name: data.name,
                                id: data.id,
                                front_default: data.sprites.front_default,
                                stats: data.stats,
                                types: data.types,
                              });
        }
    }

    //изменить количество отображаемых покемонов на странице
    SetCountPokemons = (value = 20) => {
        this.countOfPokemons = value;
        this.showPokemons = [];

        this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page * this.countOfPokemons)
                      .map(el=>this.showPokemons.push(el));

        document.getElementById('search').value = '';
    }

    //функция поиска по имени
    SearchAsName = () =>{
        this.filterPokemons = this.pokemons.slice(0,802)
            .filter(el=>{return el.name.indexOf(document.getElementById('search').value) >=0});

        this.showPokemons = this.filterPokemons.slice(0,this.countOfPokemons);
        this.countOfCard = this.filterPokemons.length;
    
        if (document.getElementById('search').value.length === 0){
            this.pokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page * this.countOfPokemons)
                .map(el => this.showPokemons.push(el));
                
            this.countOfCard = this.pokemons.length;
            this.filterPokemons = [];
            this.pokemons.map(el => this.filterPokemons.push(el));
        }
    }

    //функция поиска по параметра фильтра
    SearchAsFilterMenu = () =>{
            let result = this.pokemons.filter(el => {return  el.stats[5].base_stat >=  document.getElementById('hp').value});
            result = result.filter(el => {return el.stats[4].base_stat >=  document.getElementById('attack').value});
            result = result.filter(el => {return el.stats[0].base_stat >=  document.getElementById('speed').value});
            result = result.filter(el => {return el.stats[3].base_stat >=  document.getElementById('defense').value});

            let second_result = [];
            let state = false;

            const types = ['normal', 'flying', 'poison', 'ground', 'bug', 'fire', 'water', 'grass', 'figting', 'rock', 'ghost',
                         'steel', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'shadow'];

            for(let i in types){
                if(document.getElementById(types[i]).checked){
                    state = true;

                    second_result = second_result.concat(result.filter(el => 
                        (el.types[1]) ? (el.types[0].type.name === types[i] || el.types[1].type.name === types[i]) 
                                            : (el.types[0].type.name === types[i])
                    ));
                }
            }
            
            if(second_result.length===0 && !state)
            second_result = result;

            second_result = second_result.sort((a,b) => {return a.id - b.id});
            this.filterPokemons = second_result;
            this.showPokemons = this.filterPokemons.slice(0,this.countOfPokemons);
            this.countOfCard = this.filterPokemons.length;      
    }

    //перейти на следующую страницу
    NextPage = () =>{
        this.page++;
        this.showPokemons = [];
        
        this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page * this.countOfPokemons)
                        .map(el=>this.showPokemons.push(el));
    }

    //перейти на предыдущую страницу
    BackPage = () =>{
        this.page--;
        this.showPokemons = [];
    
        this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page * this.countOfPokemons)
                      .map(el=>this.showPokemons.push(el));
    }

    //установить страницу
    SettingPage = (value = 1) =>{
       this.page = (value>0)?value : 1;
       this.showPokemons = [];

        this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page * this.countOfPokemons)
                      .map(el=>this.showPokemons.push(el));
    }

    //очистить фильтрационную форму
    ClearFilterForm = () =>{
        this.filterPokemons = [];
        this.countOfCard = this.pokemons.length;
        this.pokemons.map(el => this.filterPokemons.push(el));

        document.getElementById('hp').value = '';
        document.getElementById('attack').value = '';
        document.getElementById('speed').value = '';
        document.getElementById('defense').value = '';

        const types = ['normal', 'flying', 'poison', 'ground', 'bug', 'fire', 'water', 'grass', 'figting', 'rock', 'ghost',
                         'steel', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'shadow'];

        types.map(el => document.getElementById(el).checked = false);

        this.SettingPage(1);
    }
}

//декоратор (установить функции данного класса как action)
decorate(Store, {
    InitialPokemons: action,
    SetCountPokemons: action,
    SearchAsName: action,
    SearchAsFilterMenu:action,
    ClearFilterForm:action,
    NextPage: action,
    BackPage: action,
    SettingPage: action,
    SettingPokemons:action
});

export default createContext(new Store());