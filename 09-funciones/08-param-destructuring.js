
/**
 * Objeto de configuración que almacena información de conexión y dirección.
 * 
 * @typedef {Object} Config
 * @property {string} url - La URL del servidor o recurso web al que se va a conectar
 * @property {Object} direccion - Objeto que contiene información de dirección
 * @property {string} direccion.calle - Nombre o descripción de la calle/ubicación
 * @property {number} direccion.port - Número de puerto para la conexión (típicamente 80 para HTTP, 443 para HTTPS)
 * 
 * @description
 * Este objeto de configuración utiliza un patrón común para almacenar datos de configuración
 * de aplicaciones. Es útil para separar la configuración del código lógico.
 * 
 * VENTAJAS:
 * - Fácil de leer y mantener
 * - Permite agrupar configuraciones relacionadas
 * - Facilita la destructuración de parámetros en funciones
 * - Puede ser fácilmente exportado/importado entre módulos
 * - Ideal para usar con parameter destructuring en funciones
 * 
 * DESVENTAJAS:
 * - No tiene validación de tipos en JavaScript puro (se recomienda TypeScript)
 * - Puede crecer y volverse difícil de manejar si no se estructura bien
 * - Los valores pueden ser modificados accidentalmente si no se usa Object.freeze()
 * 
 * CASOS DE USO EN LA VIDA REAL:
 * - Configuración de conexiones a bases de datos
 * - Configuración de APIs y servicios web
 * - Parámetros de configuración de servidores
 * - Configuración de entornos (desarrollo, producción)
 * - Ajustes de aplicaciones (temas, idiomas, preferencias)
 * 
 * BUENAS PRÁCTICAS:
 * - Usar constantes (const) para evitar reasignaciones accidentales
 * - Considerar usar Object.freeze() para hacer el objeto inmutable
 * - Mantener la estructura plana cuando sea posible
 * - Usar variables de entorno para datos sensibles (no hardcodear)
 * - Documentar con JSDoc o TypeScript para mejor mantenibilidad
 * - Separar configuraciones por entorno (dev, staging, prod)
 * - Validar la configuración al inicio de la aplicación
 * 
 * @example
 * // Uso con destructuración de parámetros
 * function conectar({ url, direccion: { port } }) {
 *   console.log(`Conectando a ${url} en puerto ${port}`);
 * }
 * conectar(config);
 * 
 * @example
 * // Hacer el objeto inmutable (buena práctica)
 * const configInmutable = Object.freeze(config);
 */
const config = { // array
    url: 'https://google.com',
    direccion: {
        calle: 'hola mundo',
        port: 80
    }
}

function webserver(config) {
    const { url, ...rest } = config;
    console.log(rest);
    return url;

}

console.log(webserver(config));