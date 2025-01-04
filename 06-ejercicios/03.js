function similares(obj1, obj2) {
    // Convertir los objetos a cadenas JSON y compararlas
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let resultado = similares(
    { id: 1, name: 'Ivan' },
    { id: 1, name: 'Ivana' },
);

console.log(resultado); // false
