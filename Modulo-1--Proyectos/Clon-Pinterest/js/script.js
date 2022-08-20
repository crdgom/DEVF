// variable para insertar texto 
const ideas = [
    "actividad para niños",
    "idea para una cena especial",
    "idea de atuendos de verano",
    "proyecto de bricolaje"
]

//funcion para mostrar texto cada segundo en orden

function ideaRotator() {
    for (let i = 0; i < ideas.length; i++) {
        setTimeout(function () {
            document.getElementById("ideas").innerHTML = ideas[i];
            // cambiar el color de cada idea
            if (i == 0) {
                document.getElementById("ideas").style.color = "rgb(0, 118, 211)";
            } else if (i == 1) {
                document.getElementById("ideas").style.color = "rgb(97, 140, 123)";
            } else if (i == 2) {
                document.getElementById("ideas").style.color = "rgb(194, 139, 0)";
            } else if (i == 3) {
                document.getElementById("ideas").style.color = "rgb(64, 122, 87)";
            }
        }, 1500 * i);
    }
    // volver a empezar
    setTimeout(ideaRotator, 1500 * ideas.length);
}