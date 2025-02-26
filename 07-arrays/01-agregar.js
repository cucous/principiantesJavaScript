const letras = ['a', 'b'];

// Metodos para modificar el contenido de nuestra constante 

letras.push('c'); // Agrega un elemento al final del array
console.log(letras); // ['a', 'b', 'c']

letras.unshift('z'); // Agrega un elemento al principio del array
console.log(letras); // ['z', 'a', 'b', 'c']

letras[1] = 'x'; // Modifica un elemento en una posición específica
console.log(letras); // ['z', 'x', 'b', 'c']

letras.splice(1, 0, 'y'); // Agrega un elemento en una posición específica
console.log(letras); // ['z', 'y', 'x', 'b', 'c']