// Crear algoritmo que decuelva cantidad de números positivos de un array

const array = [2, 5, 7, 15, -5, -100, 55];
function getPositivos(array) {
    let positivos = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positivos++;
        }
    }
    return positivos;
}

const positivos = getPositivos(array);

console.log(positivos);


/* Primer intento

const array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(array) {
    const positivo = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array = 0) {
            positivo = array[i];
            console.log('El número: ' + positivo + ' es positivo.');
            positivo++;
        }

    }
    return positivo;

}




let resultado = cuantosPositivos(array);
console.log(resultado);

*/