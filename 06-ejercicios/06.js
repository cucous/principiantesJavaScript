// sin usar .. ni Object.assign

let obj1 = { id: 1, name: 'Chanchito' };

function crearCopiarObjeto(obj) {
    let obj2 = {};
    for (let key in obj) {
        obj2[key] = obj[key];
    }
    return obj2;
}
let obj2 = crearCopiarObjeto(obj1);
console.log(crearCopiarObjeto(obj1)); // { id: 1, name: 'Chanchito' }

