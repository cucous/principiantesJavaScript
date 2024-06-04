let a = { prop: 1 };

function suma(n) {
    n.prop += 1;

}


suma(a);
console.log(a);

/**
 * Primitivos -> se copian
 * Objetos -> se referencias
 *              -objetos
 *              -arreglos
 *              -funciones
 *              -clases
 *             -instancias de clases
 *             -objetos literales
 */