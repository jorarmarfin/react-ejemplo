const personajes = ['Goku','Vegeta','Trunks'];

const [p1] = personajes;
const [,p2] = personajes;
const [,,p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC',123];
}
const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

const prueba = (valor)=>{
    return [valor,()=>{console.log('Hola mundo')}];
}
const [nombre,setNombre] = prueba('Goku');
setNombre();