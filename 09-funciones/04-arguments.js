/**
 * Suma todos los argumentos pasados a la función usando el objeto arguments.
 * 
 * @function suma
 * @param {number} a - Primer argumento (nota: los parámetros nombrados son opcionales)
 * @param {number} b - Segundo argumento (nota: los parámetros nombrados son opcionales)
 * @returns {number} La suma total de todos los argumentos pasados
 * 
 * @description
 * Esta función demuestra el uso del objeto `arguments` en JavaScript, que es una
 * variable especial disponible dentro de cada función. El objeto `arguments` contiene
 * todos los valores pasados a la función, independientemente de cuántos parámetros
 * estén declarados en la firma de la función.
 * 
 * @example
 * suma(1, 2);           // retorna 3
 * suma(1, 2, 3);        // retorna 6
 * suma(5, 10, 15, 20);  // retorna 50
 * 
 * @note
 * - El objeto `arguments` es similar a un array pero no es un array real
 * - Array.from() convierte el objeto arguments en un array verdadero
 * - reduce() acumula todos los valores en una sola suma
 * - Ventaja: La función acepta cualquier cantidad de argumentos sin límite
 */
function suma(a, b) {
    // let total = 0;
    // for (let valor of arguments) {
    //     total += valor;
    // }
    // return total;

    Array.from(arguments)
        .reduce((acc, el) = acc + el);


}

console.log(suma(1, 2, 3, 4));

