const letras = ['a', 'b', 1, 'c', 'd', 1];

console.log(letras.indexOf('c')); // 2 
console.log(letras.indexOf(1)); // -1 (indexOf busca desde el principio)
console.log(letras.lastIndexOf(1)); // 5 (lastIndexOf busca desde el final)

console.log(letras.indexOf(1) !== -1); // true

console.log(letras.includes('d')); // true

// Desde el indice que quiero comenzar a buscar
console.log(letras.indexOf('c', 3)); // 3 