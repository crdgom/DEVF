let screen = 0;
let screenValue = document.getElementById("screen");
let btnClear = document.getElementById("btn-clear").addEventListener("click", clear);
let btnBack = document.getElementById("btn-back").addEventListener("click", backspace);
let btnPercent = document.getElementById("btn-percent").addEventListener("click", btnNumbersAndOperators);
let btnDivision = document.getElementById("btn-division").addEventListener("click", btnNumbersAndOperators);
let btnSeven = document.getElementById("btn-seven").addEventListener("click", btnNumbersAndOperators);
let btnEight = document.getElementById("btn-eight").addEventListener("click", btnNumbersAndOperators);
let btnNine = document.getElementById("btn-nine").addEventListener("click", btnNumbersAndOperators);
let btnMultiply = document.getElementById("btn-multiply").addEventListener("click", btnNumbersAndOperators);
let btnFour = document.getElementById("btn-four").addEventListener("click", btnNumbersAndOperators);
let btnFive = document.getElementById("btn-five").addEventListener("click", btnNumbersAndOperators);
let btnSix = document.getElementById("btn-six").addEventListener("click", btnNumbersAndOperators);
let btnMinus= document.getElementById("btn-minus").addEventListener("click", btnNumbersAndOperators);
let btnOne = document.getElementById("btn-one").addEventListener("click", btnNumbersAndOperators);
let btnTwo = document.getElementById("btn-two").addEventListener("click", btnNumbersAndOperators);
let btnThree = document.getElementById("btn-three").addEventListener("click", btnNumbersAndOperators);
let btnPlus = document.getElementById("btn-plus").addEventListener("click", btnNumbersAndOperators);
let btnCero = document.getElementById("btn-cero").addEventListener("click", btnNumbersAndOperators);
let btnDot = document.getElementById("btn-dot").addEventListener("click", btnNumbersAndOperators);
let btnEqual = document.getElementById("btn-equal").addEventListener("click", operations);


function clear() {
    screen = 0;
    screenValue.innerHTML = screen
}

function backspace() {
    if (screen.length > 0) {
        screen = screen.slice(0, -1);
        screenValue.innerHTML = screen
    }
}

function screenCero() {
    if (screen === 0) {
        screen = "";
        screenValue.innerHTML = screen
    }
}
function btnNumbersAndOperators(){
    screenCero();
    switch (this.id) {
        case "btn-one":
            screen += "1";
            console.log(screen);
            break;
        case "btn-two":
            screen += "2";
            break;
        case "btn-three":
            screen += "3";
            break;
        case "btn-four":
            screen += "4";
            break;
        case "btn-five":
            screen += "5";
            break;
        case "btn-six":
            screen += "6";
            break;
        case "btn-seven":
            screen += "7";
            break;
        case "btn-eight":
            screen += "8";
            break;
        case "btn-nine":
            screen += "9";
            break;
        case "btn-cero":
            screen += "0";
            break;
        case "btn-dot":
            screen += ".";
            break;
        case "btn-plus":
            screen += "+";
            break;
        case "btn-minus":
            screen += "-";
            break;
        case "btn-multiply":
            screen += "*";
            break;
        case "btn-division":
            screen += "/";
            break;
        case "btn-percent":
            screen += "%";
            break;
        default:
            break;
    }
    screenValue.innerHTML = screen
}

function operations() {
    if (screen.includes("+")) {
        let numbers = screen.split("+");
        let result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
        screen = result;
        screenValue.innerHTML = screen
    } else if (screen.includes("-")) {
        let numbers = screen.split("-");
        let result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
        screen = result;
        screenValue.innerHTML = screen
    } else if (screen.includes("*")) {
        let numbers = screen.split("*");
        let result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
        screen = result;
        screenValue.innerHTML = screen
    } else if (screen.includes("/")) {
        let numbers = screen.split("/");
        let result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        screen = result;
        screenValue.innerHTML = screen
    }
}


function detectorSwiper() {

    //revisar si existe una clase clase dentro del html

    
}
