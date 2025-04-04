const usuarios = [
    { edad: 17, nombre: 'Ivan', plan: 'Premium' },
    { edad: 13, nombre: 'Juan', plan: 'Free' },
    { edad: 32, nombre: 'Paty', plan: 'Free' },
    { edad: 25, nombre: 'Said', plan: 'Gold' },
];


function groupBy(arr, prop) {
    return arr.reduce((acc, el) => {
        const key = el[prop];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(el);
        return acc;
    }, {});
}


const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });