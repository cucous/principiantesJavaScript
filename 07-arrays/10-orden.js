let numeros = [10, 15, -3];

numeros.sort();
numeros.reverse();
console.log(numeros); // [15, 10, -3]
console.log(numeros); // [-3, 10, 15]

let letras = ['z', 'a', 'd'];
letras.sort();
console.log(letras); // ['a', 'd', 'z']

let conMayusculas = ['Z', 'a', 'D'];
conMayusculas.sort((a, b) => {
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if (alower < blower) {
        return -1;
    }
    if (alower > blower) {
        return 1;
    }
    return 0;
});
console.log(conMayusculas); // ['D', 'Z', 'a']


// Objectos
let usuarios = [
    { nombre: 'Iván', edad: 28 },
    { nombre: 'Chanchito feliz', edad: 8 },
    { nombre: 'Iván', edad: 12 }
]

usuarios.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    } else if (a.edad > b.edad) {
        return 1;
    }
    return 0;
})
console.log(usuarios); // [{ nombre: 'Chanchito feliz', edad: 8 }, { nombre: 'Iván', edad: 12 }, { nombre: 'Iván', edad: 28 }]
