const usuarios = [
    { id: 1, nombre: 'Chanchito' },
    { id: 2, nombre: 'Feliz' },

];


usuarios.indexOf({ id: 1, nombre: 'Chanchito' }); // -1
const chanchito = usuarios.find(usuario => usuario.id === 1);
console.log(chanchito); // { id: 1, nombre: 'Chanchito' }
