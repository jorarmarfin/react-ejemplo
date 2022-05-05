const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre)=>`Hola, ${nombre}`;

const getUser = ()=>({
    uid:'1234',
    username:'luiscmap'
});
//Asi se retorna un obketo implicito
const getUsuarioActivo = (nombre)=>({
    uid:'1234',
    username:nombre
});
console.log(getUsuarioActivo('Goku'));