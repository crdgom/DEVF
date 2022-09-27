/*

* TODO: Calcula el total de una compra en el super: Si llevo 3kg
* de Tomate, 1/2 kg de frijol, 2 aguacate, 1/4 kg de cebolla
* y 1/4 kg de chile.

Precios:

Kilo de tomate: 16.67
Kilo de Frijol: 26.65
Aguacate por pieza: 17.00
Kilo de cebolla: 18.90
Kilo de chile: 11.87

Calcula el IVA (16%) al total
Cuanto pagaría?

*/

const kg = 1000

let tomatePrecio = 16.67;
let frijolPrecio = 26.65;
let aguacatePrecio = 17.00;
let cebollaPrecio = 18.90;
let chilePrecio = 11.87;

const IVA = 0.16;

// Operaciones
// * 3kg de Tomate, 1/2 kg de frijol, 2 aguacate, 1/4 kg de cebolla
// * y 1/4 kg de chile.

// ! x = precio x gramos / 1000  (13,325)


let tomateKg = prompt("¿Cuántos gramos de Tomate llevas?");
let frijolKg = prompt("¿Cuántos gramos de Frijol llevas?");
let aguacatePza = prompt("¿Cuántos aguacates llevas?");
let cebollaKg = prompt("¿Cuántos gramos de cebolla llevas?");
let chilelKg = prompt("¿Cuántos gramos de chile llevas?");


let calcularTomate = (tomatePrecio * tomateKg) / kg;
let calcularFrijol = (frijolPrecio * frijolKg) / kg;
let calcularAguacate = aguacatePrecio * aguacatePza;
let calcularCebolla = (cebollaPrecio * cebollaKg) / kg;
let calcularChile = (chilePrecio* chilelKg) / kg;

console.log("Tomate Total: $ " + calcularTomate.toFixed(2) + " MXN");
console.log("Frijol Total: $ " + calcularFrijol.toFixed(2) + " MXN");
console.log("Aguacate Total: $ " + calcularAguacate.toFixed(2) + " MXN");
console.log("Cebolla Total: $ " + calcularCebolla.toFixed(2) + " MXN");
console.log("Chile Total: $ " + calcularChile.toFixed(2) + " MXN");

let subtotal = calcularTomate + calcularFrijol + calcularAguacate + calcularCebolla + calcularChile;

console.log("Subtotal: $ " + subtotal.toFixed(2) + " MXN");

let iva = subtotal * IVA
console.log("I.V.A. : $ " + iva.toFixed(2) + " MXN");

let total = subtotal + iva;

console.log("El total a pagar es : $ " + total.toFixed(2) + " MXN");