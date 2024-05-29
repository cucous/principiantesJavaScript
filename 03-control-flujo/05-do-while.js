// Cuales son los números pares

let i = 2;
while (i < 2) {
    // Codigo
    if (i % 2 === 0) {
        console.log('WHILE');
        console.log('Número par: ', i);
    }

    i++;
}

do {
    // Codigo
    if (i % 2 === 0) {
        console.log('DO WHILE');
        console.log('Número par: ', i);
    }

    i++;
} while (i < 2);