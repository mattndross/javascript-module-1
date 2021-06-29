//Devuelve el monto que debe pagar cada comensal en una mesa de dos
function cuantoPaga(precioTotal, cantidadDeComensales) {
    const precioPorComensal = precioTotal / cantidadDeComensales;
    return `Cada uno debe pagar €${precioPorComensal}`;
}

console.log(cuantoPaga(36, 4));
console.log(cuantoPaga(80, 7));
console.log(cuantoPaga(50, 3));
console.log(cuantoPaga(59, 7));