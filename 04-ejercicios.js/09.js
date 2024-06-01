// Crear algoritmo que devuelva un array de objetos en base a pares

let pairs = [
    [1, { name: 'Juan' }],
    [2, { name: 'Ana' }],
    [3, { name: 'Pedro' }],
];

function toCollection(pairs) {
    let colecction = [];
    for(let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        let obj = {};
        obj[pair[0]] = pair[1];
        colecction.push(obj);
    }
}

let resutl = toCollection(pairs);
console.log(resutl);



