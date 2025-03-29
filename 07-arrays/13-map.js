// maps es un método que nos permite transformar un array de objetos
// en un nuevo array de objetos con una estructura diferente.
// maps devuelve un nuevo array con los elementos transformados y no modifica el array original.

const usuarios = [
    { edad: 17, nombre: 'Iván' },
    { edad: 13, nombre: 'chanchito' },
    { edad: 25, nombre: 'Paty' },
    { edad: 45, nombre: 'Luis' },
];

const lista= usuarios
    .filter(u=>u.edad >= 17)
    .map(u => `<li>${u.nombre} tiene ${u.edad} años</li>`);

const html = `<ol>${lista.join('')}</ol>`;
console.log(html); 

console.log('-------------------');

const mapped = usuarios.map(u => ({
        ...u,
        mayor: u.edad >= 17,
}));
