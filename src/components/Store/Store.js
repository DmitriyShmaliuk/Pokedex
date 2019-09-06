import  {action, observable} from 'mobx';
import axios from "axios";

class Store{
    @observable pokemons = []; //массив покемонов
    @observable showPokemons = []; //массив показываемых покемонов
    @observable filterPokemons = []; //массив фильтрированных покемонов
    @observable pokemonInfo = {}; //инфомрация об конкретном покемоне
    @observable page = 1; //текущая страница
    @observable countOfPokemons = 20; //количество покемонов на странице
    @observable countOfCard = 0; //количество покемонов

    constructor (){
        this.GetPokemons();
    }

    //получить покемонов на следующую страницу
    GetPokemons = async () =>{
        const res = await axios(`https://pokeapi.co/api/v2/pokemon/?limit=${this.countOfPokemons}&offset=${(this.page * this.countOfPokemons)-this.countOfPokemons}`);
        this.showPokemons = []; 
        this.countOfCard = res.data.count;
        res.data.results.map(el => this.showPokemons.push(el));

        if(this.pokemons.length === 0){
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/?limit=${this.countOfCard}&offset=0`);
            res.data.results.map(el => this.pokemons.push(el));
        }
    }

    //изменить количество отображаемых покемонов на странице
    @action SetCountPokemons = (value) => {
        this.countOfPokemons = value;

        if(this.filterPokemons.length === 0)
            this.GetPokemons();
        else
            this.showPokemons = this.filterPokemons.slice(0, this.countOfPokemons);
    }

    //функция поиска по имени
    @action SearchAsName = () =>{
        const text = document.getElementById('search').value;
        this.page = 1;

        if(text.length !== 0){
            this.filterPokemons = this.pokemons.filter(el => el.name.indexOf(text) >=0);
            this.countOfCard = this.filterPokemons.length;
            this.showPokemons = this.filterPokemons.slice(0, this.countOfPokemons);
        }
        else{
            this.countOfCard = this.pokemons.length;
            this.filterPokemons = [];
            this.GetPokemons();
        }
    }

    //функция поиска по параметра фильтра
    @action SearchAsFilterMenu = () => {    
    }

    //перейти на следующую страницу
    @action NextPage = () =>{
        this.page++;

        console.log((this.page*this.countOfPokemons)-this.countOfPokemons);
        console.log(this.page*this.countOfPokemons);
        
        if(this.filterPokemons.length === 0)
            this.GetPokemons();
        else
            this.showPokemons = this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page*this.countOfPokemons);
    }

    //перейти на предыдущую страницу
    @action BackPage = () =>{
        this.page--;

        if(this.filterPokemons.length === 0)
            this.GetPokemons();
        else
            this.showPokemons = this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page*this.countOfPokemons);
    }

    //установить страницу
    @action SettingPage = (value) =>{
        this.page = value;
        
        if(this.filterPokemons.length === 0)
            this.GetPokemons();
        else
            this.showPokemons = this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page*this.countOfPokemons);
    }

    //очистить фильтрационную форму
    @action ClearFilterForm = () =>{
        document.getElementById('search').value = '';

        this.filterPokemons = [];
        this.page = 1;
        this.GetPokemons();
    }

    //получить информация о конкретном покемоне
    @action GettingInfo = async (value) =>{
        this.pokemonInfo  = {};
        
        const info = await axios(`https://pokeapi.co/api/v2/pokemon/${value}`);
        this.pokemonInfo = info.data;
    }
}

export default new Store();