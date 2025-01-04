let objeto = {
    id: 1,
    name: 'cucou',
    login: function () { },
    logout: function () { },
}

let propiedad = 'name';

function tieneProp(obj, propiedad) {
    for (let key in obj) {
        if (typeof obj[key] === 'name') {
            console.log(key);
        }
    }
}

console.log(tieneProp(objeto, propiedad)); // true


