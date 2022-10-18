// Crea una función llamada letter ingresar cualquier letra del alfabeto y verifique si es vocal o consonante
// "Vocal" si la letra es una vocal.
// "Consonante" si la letra es una consonante.

let letra = prompt("Ingrese una letra del alfabeto");
letra.toLowerCase();

function letter(letra) {
    if (letra === "a"|| letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return "Vocal";
    } else{
        return "Consonante";
    }
}