const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('Dibujando...');
    }
};


//delete punto.dibujar;

// validar/Comprobar si esxiste una propiedad en un objeto
if ('dibujar' in punto) {
    punto.dibujar();
}

// Ambos métodos devuelven un arreglo con las propiedades del objeto, son lo mismo
//let keys = Object.keys(punto);
//console.log(Object.keys(punto));

// Con OF se recorre el arreglo
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}


for(let entry of Object.entries(punto)){
    console.log(entry);
}

for(let llave in punto){
    console.log(llave, punto[llave]);
}


