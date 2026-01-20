/**
 * Suma múltiples números utilizando el operador rest (...rest)
 * 
 * @param {number} a - Primer parámetro obligatorio
 * @param {number} b - Segundo parámetro obligatorio
 * @param {...number} rest - Parámetros adicionales (operador rest)
 * 
 * @description
 * Esta función utiliza el operador rest para capturar argumentos adicionales
 * más allá de los dos primeros parámetros en un array.
 * 
 * VENTAJAS:
 * - Permite aceptar un número variable de argumentos de forma elegante
 * - El rest parameter siempre captura valores en un array real
 * - Mejora la legibilidad comparado con usar arguments (deprecated)
 * - Solo puede haber un rest parameter y debe ser el último
 * 
 * DESVENTAJAS:
 * - Los parámetros 'a' y 'b' siempre son obligatorios
 * - Si solo necesitas argumentos variables, es mejor omitir los primeros parámetros
 * - Puede ser confuso si no documentas correctamente
 * 
 * CASOS DE USO EN LA VIDA REAL:
 * - Funciones matemáticas: suma(1, 2, 3, 4, 5)
 * - Funciones de utilidad: concat, merge de arrays/objetos
 * - Logger con múltiples parámetros: log(level, message, ...meta)
 * - Funciones de callback con argumentos variables
 * 
 * BUENAS PRÁCTICAS:
 * ✓ Usar nombres descriptivos para el rest parameter
 * ✓ Documentar explícitamente con JSDoc
 * ✓ Validar el contenido del rest array si es necesario
 * ✓ Considerar si realmente necesitas los parámetros obligatorios
 * ✓ El rest parameter debe ser siempre el último
 */
const suma = (a, b, ...rest) => { //<-- El parametro de rest siempre tiene que ser el ultimo
    console.log(rest);
}

// suma(1,2,3,4);

// Ejemplo de la vida real
const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}


// logMsg('Servidor:', 'Error 1', 'Peticion aceptada', 'socket activo');

let messages = ['Error 1', 'Peticion aceptada', 'socket activo'];
console.log('Cliente móvil:', ...messages, 'Otro error');