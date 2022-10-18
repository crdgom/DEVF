// Crea una función llamada isMinor() que recibe tres parámetros numéricos y evalúe:
// En caso de que alguno de los números sea menor a 10 retorna true.
// En caso de que ninguno de los números sean menores a 10 retorna false.

function isMinor(n1,n2,n3){
    if(n1<10 || n2<10 || n3<10){
        return true
    } else {
        return false
    }
}