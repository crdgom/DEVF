/*

    * 3.Crea un programa, el cual sirva para convertir temperaturas. 
    * De Celsius a Fahrenheit y viceversa. Utiliza las expresiones
    * matemáticas necesarias para la conversión. Que dicho programa
    * reciba como argumentos las temperaturas y regresa el resultado
    * imprimiendo en pantalla la conversión.
    * Tu solución es libre a la imaginación.

*/

let celsius = 100;
let fahrenheit = 0;

function convertToFahrenheit(celsius){
    return (celsius * (9/5)) + 32;
}

function convertToCelsius(fahrenheit){
    return (fahrenheit - 32) * (5/9);
}

console.log(convertToFahrenheit(celsius));
console.log(convertToCelsius(fahrenheit));
