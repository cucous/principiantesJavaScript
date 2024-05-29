function precioCompleto(precio, impuesto) {
    const precioNuevo = precio + precio * impuesto;
    return precioNuevo;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado); 