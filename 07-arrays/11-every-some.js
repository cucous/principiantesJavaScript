// Va a ver momentos en los que tendremos que validar si todos los elementos de un array cumplen
// con una caracteristica o si al menos uno de ellos cumple con una característica
// Para eso existen dos métodos:
// every y some
// every: devuelve true si todos los elementos cumplen con la condición
// some: devuelve true si al menos uno cumple con la condición

let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
];

// Primer metodo every()
let todosActivos =
    usuarios.every(u => {
        console.log('Todos los usuarios están activos ', u.id);
        return u.activo;
    });

console.log(todosActivos); // false
// En este caso, el resultado es false porque no todos los usuarios son activos
// En el caso de que todos los usuarios fueran activos, el resultado sería true
// En el caso de que no hubiera usuarios, el resultado sería true

console.log('-------------------');

// Segundo metodo some()
let alMenosUnoActivo =
    usuarios.some(u => {
        console.log('Al menos un usuario está activo ', u.id);
        return u.activo;
    });
    
    console.log(alMenosUnoActivo); // true
// En este caso, el resultado es true porque al menos un usuario es activo
// En el caso de que no hubiera usuarios, el resultado sería false
// En el caso de que todos los usuarios fueran activos, el resultado sería true
// En el caso de que no hubiera usuarios, el resultado sería false