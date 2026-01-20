/**
 * EJEMPLO DE PARÁMETROS CON VALORES POR DEFECTO EN JAVASCRIPT
 * 
 * PRO:
 * - Código más limpio: No necesitas pasar todos los parámetros si usas los valores por defecto
 * - Flexibilidad: Puedes usar valores predeterminados o pasar los tuyos propios
 * - Menos errores: Evita undefined si olvidas pasar un parámetro
 * 
 * CONTRAS:
 * - Confusión: Si hay muchos parámetros por defecto, el código se vuelve difícil de leer
 * - Debugging: Difícil saber qué valor se está usando (¿el por defecto o el pasado?)
 * 
 * CASOS DE USO EN LA VIDA REAL:
 * - Configuración de APIs (URL base, puerto, timeout)
 * - Opciones de funciones de utilidad (paginación, límites)
 * - Parámetros de conexión a bases de datos
 * 
 * BUENA PRÁCTICA:
 * - Usar objetos de configuración en lugar de múltiples parámetros
 * - Máximo 2-3 parámetros; si hay más, usar un objeto
 */

// Objeto de configuración base - Define la estructura esperada
const config = {
    url: 'https://google.com',
}

/**
 * FUNCIÓN CON PARÁMETROS POR DEFECTO (ANTIGUO):
 * - url: parámetro obligatorio (URL de la API)
 * - bucket: parámetro opcional (valor por defecto: 145)
 * - port: parámetro opcional (valor por defecto: 8080)
 * 
 * Retorna un string con la configuración formateada
 * Ejemplo: "https://google.com/145:8080"
 */
function configAPI(url, bucket = 145, port = 8080) {
    return `${url}/${bucket}:${port}`;
}

// Esta línea está comentada - No ejecuta la función
//console.log(configAPI('https://google.com'));

// Ejecuta configAPI pasando todos los parámetros explícitamente
console.log(configAPI('https://google.com', 145, 8080));

/**
 * MEJOR PRÁCTICA - Usar un objeto en lugar de parámetros individuales:
 */
function configAPIBetter({ url, bucket = 145, port = 8080 } = {}) {
    return `${url}/${bucket}:${port}`;
}

// Más legible y mantenible
console.log(configAPIBetter({ url: 'https://google.com' }));
