/* Crea una función llamada evaluateLetter() que reciba como parámetro
cualquier letra del alfabeto y verifique si es vocal o consonante.
En caso de ser vocal, devolver "Vocal"
En caso de ser consonante, devolver "Consonante" */

function evaluateLetter(l){
    l.toLowerCase()
    if (l === "a"|| l ==="e" || l === "i" || l === "o" || l === "u" ){
        return "Vocal"
    } else {
        return "Consonante"
    }
}