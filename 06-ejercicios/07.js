let objeto = { name: 'Chanchito' };

function agregarID(obj) {
    let obj2 = { ...obj, id: 1 };
    return obj2;
}

agregarID(objeto);
console.log(agregarID(objeto)); // { name: 'Chanchito', id: 1 }




