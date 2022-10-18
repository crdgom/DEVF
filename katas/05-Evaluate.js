// Escribe una función llamada evaluate que reciba como parámetro un número
// retorne lo siguiente:


// - "Positivo" si el número es positivo.
// - "Negativo" si el número es negativo.
// - "Cero" si el número es cero.

function evaluate(n){
    if (n>0 && n != 0){
        return "Positivo"
    }
    if (n<0){
        return "Negativo"
    }
    if (n === 0){
        return "Cero"
    }
}