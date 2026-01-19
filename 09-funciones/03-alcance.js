// Variable por fuera que se puede utilizar tanto adentro de otra función
let afuera = 'Estoy afuera';


function alcance() {
    console.log(afuera); // <-- Se puede mandar a llamar a la función de afuera dentro de la función
    afuera = 'Estoy adentro'; // <-- Cambiamos el valor de la variable afuera
    function saludo() { }
    var vieja = 'Ya no usar';
    let variable = 'Hola mundo';
    const constante = 'Hola mundo';

}
// Si se imprime en consola marcara error ya que solo se pueden mandar a llamar dentro de la funcióm
// ya que solo existen dentro de la función alcance()
// console.log(saludo);
// console.log(vieja);
// console.log(variable);
// console.log(constante);



console.log(afuera); // <-- Primero mandamos a llamar la variable tal como esta
alcance();              // <-- Luego mandamos a llamar a la función y por ende cambia el valor de la variable 'afuera'
console.log(afuera);    // <-- Volvemo a mandar a llamar a la variable afuera pero ahora tiene el valor de 'Estoy adentro' por que mandamos a llamar a la función