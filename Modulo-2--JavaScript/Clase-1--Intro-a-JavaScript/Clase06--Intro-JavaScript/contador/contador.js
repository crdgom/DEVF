// contador

let counter = 0;
let counterValue = document.getElementById("counter-value")
let counterIncrement = document.getElementById("btn-increase").addEventListener("click", increment);
let counterDecrement = document.getElementById("btn-decrease").addEventListener("click", decrement);
let counterReset = document.getElementById("btn-reset").addEventListener("click", reset);

function increment() {
        counter++;
        counterValue.innerHTML = counter
}

function decrement() {
    if (counter > 0) {
        counter--;
        counterValue.innerHTML = counter
    }
}

function reset() {
    counter = 0;
    counterValue.innerHTML = counter
}