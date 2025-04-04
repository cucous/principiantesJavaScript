const usuarios = [
    { edad: 17, nombre: 'Ivan', plan: 'Premium' },
    { edad: 13, nombre: 'Juan', plan: 'Premium' },
    { edad: 32, nombre: 'Paty', plan: 'Free' },
    { edad: 25, nombre: 'Said', plan: 'Gold' },
];

function obtenerMayor(){
    let mayor = arr[0];
    for(let usuario of arr){
        if(mayor.edad <usuario.edad){
            mayor = usuario;
        }
    }
}


const mayor = obtenerMayor(usuarios);
console.log(mayor);