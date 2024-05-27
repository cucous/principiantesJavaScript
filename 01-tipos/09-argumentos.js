function suma(a, b) {
    console.log(arguments);//arguments es un objeto que tiene todos los argumentos que se le pasan a la función, no es la forma recomendada de hacerlo
    return a + b;

}

const resultado = suma(5, 6, 7, 8, 9, 10);

console.log(resultado);

console.log(typeof suma);



