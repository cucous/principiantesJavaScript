// filter method es un método que nos permite filtrar un array de objetos
// en base a una condición que le pasamos como argumento.
// filter devuelve un nuevo array con los elementos que cumplen con la condición
// y no modifica el array original.

const usuarios= [
    {edad : 17, nombre : 'Iván'}, // ✅
    {edad : 28, nombre : 'Chanchito feliz'}, // ✅
    {edad : 12, nombre : 'Juan'}, // ❌
];

// En este caso, queremos filtrar los usuarios que son mayores de edad
// y devolver un nuevo array con los usuarios que cumplen con la condición
const mayoresDeEdad= usuarios.filter(u => u.edad >= 17);
console.log(mayoresDeEdad); // [{edad : 28, nombre : 'Chanchito feliz'}, {edad : 17, nombre : 'Iván'}]
// En este caso, el resultado es un nuevo array con los usuarios que son mayores de edad