function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('Dibujando...');
    }
}

let punto = { z: 7 };
// Método 1, se pasa los argumentos como argumentos separados
Punto.call(punto, 1, 2);
// Método 2, se pasa los argumentos como un arreglo
Punto.apply(punto, [1, 2]);

console.log(punto);



// No hacer esto
/*
const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function () {
    console.log('Dibujando...');
}`);
*/
//const p = new Point(1, 2);

//console.log(p);