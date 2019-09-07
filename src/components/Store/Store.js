import  {action, observable} from 'mobx';
import axios from "axios";

class Store{
    @observable pokemons = []; //all pokemons
    @observable showPokemons = []; //displayed pokemons
    @observable filterPokemons = []; //filtred pokemons
    @observable pokemonInfo = {};  //info about current pokemon
    @observable page = 1; //current page
    @observable countOfPokemons = 20; //quantity of pokemons on page
    @observable countOfCard = 0; //quantity of pokemons

    constructor (){
        this.GetPokemons();
    }

    //get pokemons on page 
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

    //change the number of displayed Pokemon on page
    @action SetCountPokemons = value => {
        this.countOfPokemons = value;

        if(this.filterPokemons.length === 0)
            this.GetPokemons();
        else
            this.showPokemons = this.filterPokemons.slice(0, this.countOfPokemons);
    }

    //go to next page
    @action NextPage = () =>{
        this.page++;
 
        if(this.filterPokemons.length === 0)
            this.GetPokemons();
        else
            this.showPokemons = this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page*this.countOfPokemons);
    }

    //go to back page
    @action BackPage = () =>{
        this.page--;

        if(this.filterPokemons.length === 0)
            this.GetPokemons();
        else
            this.showPokemons = this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page*this.countOfPokemons);
    }

    //set number of page
    @action SettingPage = (value) =>{
        this.page = value;
        
        if(this.filterPokemons.length === 0)
            this.GetPokemons();
        else
            this.showPokemons = this.filterPokemons.slice((this.page*this.countOfPokemons)-this.countOfPokemons, this.page*this.countOfPokemons);
    }

    //get inforamtion about pokemon
    @action GettingInfo = async (value) =>{
        this.pokemonInfo  = {};
        const info = await axios(`https://pokeapi.co/api/v2/pokemon/${value}`);
        this.pokemonInfo = info.data;
    }
}

export default new Store();