// Crea una función llamada game que simule el juego "Piedra, papel y tijeras", la función recibirá como parámetros como se muestra a continuación:
// game("Piedra", "Papel") Jugador 1 ha seleccionado "Piedra" y jugador 2 ha seleccionado "Papel", por lo tanto el ganador es el jugador 2.
// La función unicamente recibirá como parámetro "Piedra", "Papel" o "Tijeras", retornar lo siguiente:
// "J1" Si ha ganado el jugador 1.
// "J2" Si ha ganado el jugador 2.
// "Empate" Si hay un empate.

function game(j1, j2){
    if (j1 === "Piedra" && j2 === "Papel"){
        return "J2"
    } else if (j1 === "Papel" && j2 === "Tijeras"){
        return "J2"
    } else if (j1 === "Tijeras" && j2 === "Piedra"){
        return "J2"
    } else if (j1 === "Papel" && j2 === "Piedra"){
        return "J1"
    } else if (j1 === "Tijeras" && j2 === "Papel"){
        return "J1"
    } else if (j1 === "Piedra" && j2 === "Tijeras"){
        return "J1"
    } else {
        return "Empate"
    }
}