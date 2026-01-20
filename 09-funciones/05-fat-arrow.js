
// Fat arrow functions
// No tienen ARGUMENTS
// Tampoco tienen SUPER ni THIS
// Solo utilizarlas para acerlas calculos 

/**
 * Intenta sumar múltiples argumentos usando una arrow function.
 * 
 * @param {number} a - Primer número (declarado pero no utilizado)
 * @param {number} b - Segundo número (declarado pero no utilizado)
 * @returns {undefined} La función no retorna nada (falta return en reduce)
 * 
 * @description
 * PROBLEMAS:
 * - Arrow functions NO tienen el objeto 'arguments', usa parámetros rest en su lugar
 * - Falta 'return' en el reduce, retorna undefined
 * - Los parámetros 'a' y 'b' son ignorados
 * - El código comentado muestra un enfoque más legible pero menos funcional
 * 
 * @example
 * // ❌ INCORRECTO (código actual)
 * suma(5, 10); // undefined
 * 
 * // ✅ CORRECTO - Opción 1: Parámetros rest
 * const sumaCorrecta = (...numeros) => {
 *     return numeros.reduce((acc, el) => acc + el, 0);
 * }
 * 
 * // ✅ CORRECTO - Opción 2: Arrow function compacta
 * const sumaCompacta = (...numeros) => 
 *     numeros.reduce((acc, el) => acc + el, 0);
 * 
 * CASOS DE USO REAL:
 * - Calculadora de gastos totales
 * - Sumar scores en videojuegos
 * - Acumular valores de sensores IoT
 * 
 * BUENAS PRÁCTICAS:
 * - Usa (...args) rest parameters en arrow functions, NO arguments
 * - Siempre retorna un valor en funciones que lo requieran
 * - Proporciona valor inicial en reduce para evitar errores con arrays vacíos
 * - Considera usar métodos funcionales (reduce) sobre loops tradicionales
 */
const suma = (a, b) => {
    // let total = 0;
    // for (let valor of arguments) {
    //     total += valor;
    // }
    // return total;

    Array.from(arguments)
        .reduce((acc, el) = acc + el);


}

console.log(suma(1, 2, 3, 4));

