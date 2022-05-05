import {getHeroeById} from './base/08-importaciones'

const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
    //    console.log('2 segundos despues');
    const heroe = getHeroeById(2);
    resolve(heroe);
    }, 2000);
}).then((heroe)=>{
    // console.log('heroe',heroe);
}).catch(err=>console.warn(err));

const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        //    console.log('2 segundos despues');
        const heroe = getHeroeById(id);
        if(!heroe)reject('Errorrrrrrrrr');
        resolve(heroe);
        }, 2000);
    })
}
getHeroeByIdAsync(3).then(console.log).catch(err=>console.warn(err));