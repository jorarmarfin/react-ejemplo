// import { heroes } from "./data/heroes";
// import heroes from "./data/heroesTwo";
import heroes,{owners} from "../data/heroesTree";


export const getHeroeById = (id)=>{
    return heroes.find(heroe => heroe.id === id);
}
export const getHeroeByOwner = (owner)=>{
    return heroes.filter(heroe => heroe.owner === owner);
}

// console.log(getHeroeById(5));
// console.log(getHeroeByOwner('DC'));