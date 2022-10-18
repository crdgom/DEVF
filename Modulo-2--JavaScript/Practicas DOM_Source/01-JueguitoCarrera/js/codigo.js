const btnstart = document.getElementById("inicio");
const playerOne = document.getElementById("jugador1");
const playerTwo = document.getElementById("jugador2");
const playerTree = document.getElementById("jugador3");

let positionOne = 0
let positionTwo = 0
let PositionTree = 0


btnstart.addEventListener("click", function(){

    btnInicio.display = "none";
    let interval = setInterval(race, 1000);

    function race(){
        positionOne += Math.round(Math.random() * 20 );
        playerOne.style.left = `${positionOne}px`;

        positionTwo += Math.round(Math.random() * 20 );
        playerTwo.style.left = `${positionTwo}px`;

        PositionTree += Math.round(Math.random() * 20 );
        playerTree.style.left = `${PositionTree}px`;

        if (positionOne >= 711 || positionTwo >= 711 || PositionTree >= 711) {
            clearInterval(interval);
            if (positionOne > positionTwo && positionOne > PositionTree) {
                alert("Gano el jugador 1");
            } else if (positionTwo > positionOne && positionTwo > PositionTree) {
                alert("Gano el jugador 2");
            } else if (PositionTree > positionOne && PositionTree > positionTwo) {
                alert("Gano el jugador 3");
            } else {
                alert("Empate");
            }
        }
    }
    }
)


// mi código

/* btnstart.addEventListener("click", () => {
    let intervalo = setInterval(() => {
        let randomOne = Math.floor(Math.random() * 11)
        let randomTwo = Math.floor(Math.random() * 11)
        let randomTree = Math.floor(Math.random() * 11)
        positionOne += randomOne
        positionTwo += randomTwo
        PositionTree += randomTree
        playerOne.style.marginLeft = `${positionOne}px`
        playerTwo.style.marginLeft = `${positionTwo}px`
        playerTree.style.marginLeft = `${PositionTree}px`
        if (positionOne >= 700) {
            clearInterval(intervalo)
            alert("Gano el jugador 1")
        }
        if (positionTwo >= 700) {
            clearInterval(intervalo)
            alert("Gano el jugador 2")
        }
        if (PositionTree >= 700) {
            clearInterval(intervalo)
            alert("Gano el jugador 3")
        }
    }, 100);
}) */
