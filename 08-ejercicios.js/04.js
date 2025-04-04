const usuarios = [
    { edad: 17, nombre: 'Ivan', plan: 'Premium' },
    { edad: 13, nombre: 'Juan', plan: 'Premium' },
    { edad: 31, nombre: 'Paty', plan: 'Free' },
    { edad: 21, nombre: 'Said', plan: 'Gold' },
];
let contador = 0;
function cuantosPremium(usrs) {
    if (usrs.filter(u => u.plan == 'Premium')) {
        contador++;
    }
    return contador;
}

function cuantosMayores(usrs) {
    if (usrs.filter(u => u.edad >= 17)) {
        contador++;
    }
    return contador;
}

function diferentesDeFree(usrs) {
    return usrs.reduce((acc, el) => {
        if (el.plan !== 'Free') {
            return acc + 1;
        }
        return acc;
    }, 0);
}

console.log(cuantosPremium(usuarios));
console.log("---------------------------------");
console.log(cuantosMayores(usuarios));
console.log("---------------------------------");
console.log(diferentesDeFree(usuarios));