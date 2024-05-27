// Personaje de anime
const nombre = 'Saitama';
const anime = 'One Punch';
const edad = 25;

const personaje = {
    nombre: "Saitama",
    anime: "One Punch",
    edad: 25
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13; // Modificar una propiedad de un objeto


personaje['edad'] = 16;	// Otra forma de acceder a las propiedades de un objeto

console.log(personaje.edad);

personaje.poder = 'One Punch'; // Agregar una propiedad a un objeto

console.log(personaje);