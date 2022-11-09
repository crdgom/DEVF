// Notacion Big O para la busqueda secuencial

// O(n)

// como calcular Big O para la complejidad del algoritmo


// eliminar las constantes

const numbers = [1,2,3,4,5,6,7,8,9,10]

function logEverytingTwice(array){
    for (let i = 0; i < array.length; i++){  // O(n)
        console.log(array[i]) // O(1)
    }
    for (let i = 0; i < array.length; i++){ // O(n)
        console.log(array[i])   // O(1)  Discriminar la constant que incrementa la complejidad del algoritmo
    }
}

/// Cuando se tiene un algoritmo que tiene dos ciclos anidados, la complejidad del algoritmo es O(n) por que se
// suman las dos complejidades de los ciclos anidados


// Ejemplo de algoritmo con complejidad O(n^2)

function logEverytingFiveTimes(array){
    for (let i = 0; i < array.length; i++){  // O(n)
        for (let j = 0; j < 5; j++){ // O(n)
            console.log(array[i])   // O(1)  Discriminar la constant que incrementa la complejidad del algoritmo
        }
    }
}

// Cuando se tiene un algoritmo que tiene dos ciclos anidados, la complejidad del algoritmo es O(n^2) (n al cuadrado) por que se
// multiplican las dos complejidades de los ciclos anidados

