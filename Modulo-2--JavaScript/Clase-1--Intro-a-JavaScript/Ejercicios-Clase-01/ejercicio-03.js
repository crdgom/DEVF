/*

* TODO:Escribe un programa que calcule el área de un círculo con un 
*radio r = 5.3. Imprime el área en pantalla.
*(Fórmula: pi*r^2)

*/

// * Código del ejercicio 3:

// Solución 1: (Estática)

/* 
let radius = 5.3**2;
const PI = 3.1415
let result = PI*radius;
document.write(result); 
*/

// Solución 2: (Dinámica)

let radius = prompt("indica el radio a calcular en cm");
let radiusSquare = radius ** 2;
const PI = 3.1415;
let result = PI * radiusSquare;
document.write(result);
