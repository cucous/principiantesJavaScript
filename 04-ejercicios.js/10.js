/**
 * Crear un array de longitud N y que sus elementos sean números del 1 hasta N
 */


let longitud = 10;

function arrayN(longitud) {
    let array = [];
    for(let i = 1; i <= longitud; i++) {
        array.push(i);
    }
    return array;
}

let result = arrayN(longitud);
console.log(result); 







