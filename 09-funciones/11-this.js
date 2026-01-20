// this hace referencia a un objeto
// Si this se encuentra dentro de una función entonces this hace referecia al objeto window, y e el caso de NODE hace referencia al objeto global
// Pero si utilizamos la palabra NEW hace referecia al objeto que será creado


// -------------- THIS CUANDO HACE REFERENCIA A UN OBJETO --------------
// const user = {
//     name: 'Cucou',
//     login() {
//         console.log(this);
//     }
// };

// user.logout = function logout(){
//     console.log(this);
// }

// user.logout();


// -------------- THIS CUANDO SE ENCUENTRA DENTRO DE UNA FUNCIÓN --------------
// function log(){
//     console.log(this);
// }

// log();

// Referencia a una función constructora
function Log(){
    this.mensaje = mensaje;
    console.log(this);
}



/**
 * Se crea un objeto literal
 * Se vincula a este objeto a this
 * Se vincula el prototipo
 * Si no retorna nada entonces retorna this
 */
const l = new Log('Hola mundo');









