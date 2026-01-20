function sumaTodo(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parametro no es un array');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`El elemento ${el} no es un número`);
        }
        return acc + el
    });
}

console.log(sumaTodo([1, 2, 3, 4]));

console.log('--------------------------------');
try {
    // console.log(sumaTodo({ prop: 1 }));
    console.log(sumaTodo([1, 2, NaN, 'Hola mundo']));
} catch (error) {
    console.log('Error: ', error.message);
}

console.log('--------------------------------');
console.log('Despues del try catch');
