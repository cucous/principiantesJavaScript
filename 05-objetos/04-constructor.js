// 
function Usuario() { // Constructor
    this.id = 1;
    this.recuerarClave = function () { // Métodos
        console.log('Recuperando clave');
    };
}

let usuario = new Usuario(); // Instancia

console.log(usuario); 