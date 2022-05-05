const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad: 45,
    direccion:{
        ciudad:'new york',
        zip:123,
        lat:123,
        lng:123,
    }
    };
    console.table({persona});//se esta creando un objeto
    // Esto no se hace porque solo se agrega una referencia al punto de memoria de la primera variable
    const persona2 = persona;
    // para clonarlo correctamente se hace
    const persona3 = {...persona}
    
    