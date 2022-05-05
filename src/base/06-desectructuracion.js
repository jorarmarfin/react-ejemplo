const persona = {
    nombre:'Luis',
    edad:42,
    clave:'Mago',
    rango:'aprendiz',
    clave:'elemental'
}
const {nombre,edad,clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);


const useContext = ({clave,nombre,edad,rango = 'supremo'})=>{
    // console.log(nombre,edad,rango);
    return {
        nombreClave:clave,
        anios:edad
    }
}

const magos = useContext(persona);
console.log(magos);

