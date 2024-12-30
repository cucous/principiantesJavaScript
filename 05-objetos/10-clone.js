let punto = {
    x: 10,
    y: 15,
}

// Nuevo metodo del constructor Object
let referencia = Object.assign(punto, { z: 20, x: 1 });
let clonePunto = Object.assign({}, punto, { z: 20, x: 1 });

//console.log("Punto:" , punto, "ClonePunto:" , clonePunto);

//console.log("Referencia:", referencia);

let copiaPunto = Object.assign({}, punto);
//console.log("copiaPunto: " , copiaPunto);

let copia3 = { ...punto };
//console.log("copia3: " , copia3);


// Forma antigua de clonar un objeto, no recomendada, posiblemente se vea código así en código legacy

let copia4 = {};
for(let llave in punto ){
    copia4[llave] = punto[llave];

}
console.log("copia4: " , copia4);
