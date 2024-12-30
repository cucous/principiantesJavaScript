const plantilla = `hola mundo!
                    bienvenidos a javascript :)`;

console.log(plantilla);

// Pasar variables a una plantilla
const nombre = "Juan";
const apellido = "Perez";
const edad = 30;
const saludo = `Hola ${nombre} ${apellido}, tienes ${edad} años de edad.`;

// Plantilla en función
function saludar(nombre, apellido, edad) {
    return `Hola ${nombre} ${apellido}, tienes ${edad} años de edad.`;
}

console.log(saludar("Juan", "Perez", 30));