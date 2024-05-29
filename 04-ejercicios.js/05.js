const array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(array) {
    // Obtener el mayo y menor de un array
    let menor = array[0];
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return [menor, mayor];

}


const numeros = getMenorMayor(array);
console.log(numeros);