const saludo = "Hola Mundo!"; // string

const despedida = new String("Chao Mundo!"); // objeto

console.log(saludo); // <-- string
console.log(despedida); // <-- objeto

console.log(saludo.length); // <-- propiedad length (muestra la cantidad de caracteres de la variable saludo)
console.log(saludo.indexOf("Mu")); // <-- método indexOf (busca la posición de la palabra "Mu")
console.log(salludo.indexOf("aeiou")); // <-- método indexOf (busca la posición de la primera vocal)
console.log(saludo.includes("Mundo")); // <-- método includes (busca la palabra "Mundo" en la variable saludo)
console.log(saludo.replace("Mundo", "Universo")); // <-- método replace (reemplaza la palabra "Mundo" por "Universo")
console.log(saludo.replace("Mundo", "Universo", saludo)); // <-- método replace (reemplaza la palabra "Mundo" por "Universo" en la variable saludo)
let = nueoSaludo = saludo.replace("Mundo", "Universo"); // <-- método replace (reemplaza la palabra "Mundo" por "Universo" en la variable saludo)
console.log(nuevoSaludo);
console.log(saludo.toLowerCase()); // <-- método toLowerCase (convierte a minúsculas)
console.log(saludo.toUpperCase()); // <-- método toUpperCase (convierte a mayúsculas)
console.log(saludo.substring(0, 4)); // <-- método substring (muestra desde la posición 0 hasta la 4)

const espacio = "   Hola Mundo!    ";
console.log(espacio.trim()); // <-- método trim (elimina los espacios en blanco)
console.log(espacio.trimStart()); // <-- método trimStart (elimina los espacios en blanco al inicio)
console.log(espacio.trimEnd()); // <-- método trimEnd (elimina los espacios en blanco al final)
console.log(espacio.split(" ")); // <-- método split (separa las palabras por espacio)



