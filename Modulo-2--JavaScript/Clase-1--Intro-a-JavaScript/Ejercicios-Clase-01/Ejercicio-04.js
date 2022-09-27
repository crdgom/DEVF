/*

* TODO: Escribe un programa que calcule el área de un rombo, sabiendo que
*D=8cm, d=6cm 
*(Fórmula: a=Dxd/2)

*/

// Solución 1: (Estática)

/* 
let D = 8;
let d = 6;
let a = D * d / 2
console.log("El área del rombo es de " + a + " cm2"); 
*/

// Solución 1: (Dinámica)

let D = prompt("Vamos a calcular el área de un rombo, \ningresa la Diagonal mayor 'D' en cm");
let d = prompt("Ahora ingresa la Diagonal menor 'd' en cm");;
let a = D * d / 2
console.log("El área del rombo es de " + a + " cm2")