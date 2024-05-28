// Short-circuit

// False
// 0
// ""
// null
// undefined
// NaN

const nombre = 'Chanchito feliz';
const username = nombre || 'Anonimo';
console.log(username); 

function fn1(){
console.log('Hola soy función 1');
return false;
}

function fn2(){
    console.log('Hola soy función 2');
    return true;
}

const x = fn1() && fn2();





