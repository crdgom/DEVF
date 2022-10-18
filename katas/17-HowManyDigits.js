/* Crea una función llamada digits() que recibe como parámetro un número positivo 
    de uno o dos dígitos decimales (3.45), evalúe si el número tiene uno o dos dígitos decimales.

Retorne Dos dígitos, en caso de que tenga dos dígitos decimales.
Retorna Un dígito, en caso de que tenga un dígito decimal. */

function digits(n){
    a = n.toString().split(".")
    if (a[1].length == 2){
        return "Dos dígitos"
    }
    if (a[1].length == 1){
        return "Un dígito"
    }
}