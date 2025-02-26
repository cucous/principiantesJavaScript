const letras = ['a', 'b', 'c', 'd'];

// Final
const final = letras.pop(); // Elimina el último elemento del array
console.log(final, letras); // 'd'

// Comienzo
const comienzo = letras.shift(); // Elimina el primer elemento del array
console.log(comienzo, letras); // 'z'

// Posición específica
const posicion = letras.splice(1, 1); // Elimina un elemento en una posición específica
console.log(posicion, letras); // ['x']