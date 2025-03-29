//reduce suma todos los elementos de un array y devuelve un solo valor suma = (acumulador, valorActual) => acumulador + valorActual;
const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acc, el)=> { 
    return acc + el; // acc es el acumulador y el es el valor actual
}, 0);

console.log(suma); // Salida: 10 por que 1+2+3+4 = 10 ya que el es el valor actual y acc es el acumulador
//reduce suma todos los elementos de un array y devuelve un solo valor suma = (acumulador, valorActual) => acumulador + valorActual;
// 0 +1 = 1
// 1 +2 = 3
// 3 +3 = 6
// 6 +4 = 10

console.log("-------------------------------------------------------------------------------");

const anidado = [
    [1, 2 ], 3, [4, 5]
];
// Aplanar el array anidado para que quede de esta forma [1, 2, 3, 4, 5]

const plano = anidado.reduce((acc,el) =>acc.concat(el), []);

console.log(plano); // Salida: [1, 2, 3, 4, 5] ya que el es el valor actual y acc es el acumulador
//reduce suma todos los elementos de un array y devuelve un solo valor suma = (acumulador, valorActual) => acumulador + valorActual; 



const usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 35 }
];
const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {}); // {} es el valor inicial del acumulador
console.log(indexado); // Salida: { Juan: 25, Ana: 30, Pedro: 35 } ya que el es el valor actual y acc es el acumulador