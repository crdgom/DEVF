// La busqueda binaria es un algoritmo de busqueda que funciona sobre un arreglo ordenado de elementos
// El algoritmo consiste en dividir el arreglo en dos partes y buscar en la mitad correspondiente al valor a buscar
// Si el valor no se encuentra en la mitad, se repite el proceso con la otra mitad
// El algoritmo termina cuando se encuentra el valor o cuando no hay mas mitades para buscar
// El algoritmo es mas eficiente que la busqueda secuencial, pero solo funciona sobre arreglos ordenados
// Complejidad: O(log n)
//

const binarySearch = (arr, value) => {
    let start = 0
    let end = arr.length - 1

    // imprimir el numero de iteraciones
    let iterations = 0

    while (start <= end) {
        // imprimir el numero de iteraciones
        iterations++

        // calcular el indice del elemento de la mitad
        const middle = Math.floor((start + end) / 2)

        // si el valor esta en la mitad, terminar
        if (arr[middle] === value) {
            // imprimir el numero de iteraciones
            console.log('iterations:', iterations)
            return middle
        }

        // si el valor es menor que el de la mitad, buscar en la mitad izquierda
        if (value < arr[middle]) {
            end = middle - 1
        } else {
            // si el valor es mayor que el de la mitad, buscar en la mitad derecha
            start = middle + 1
        }
    }
}


// Ejemplo
// arreglo con 10000 elementos ordenados de menor a mayor
const arr = Array.from({ length: 10000 }, (_, i) => i)

console.log(binarySearch(arr, 5)) // 4



// Ejeplo DEVF

// BUsqueda secuencial en un arreglo desordenado

function busquedaSecuencial(setDatos,numeroBuscado){

    for (let i =0; i < setDatos.length; i++){
        if (setDatos[i] === numeroBuscado){
            return `El numero ${numeroBuscado} se encuentra en la posicion ${i}`
        }
    }
}

let setDatos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(busquedaSecuencial(setDatos, 19))


// BUsqueda binaria en un arreglo ordenado

function busquedaBinaria(setDatos, numeroBuscado){

    let first = 0
    let last = setDatos.length - 1
    let position = -1
    let isFound = false
    let middle

    while(isFound === false && first <= last){

        middle = Math.floor((first + last)/2)

        if (setDatos[middle] === numeroBuscado){
            isFound = true
            position = middle
        }else if (setDatos[middle] > numeroBuscado){
            last = middle - 1
        }else {
            first = middle + 1
        }


    }

    if (position >= 0){
        return `El numero ${numeroBuscado} se encuentra en la posición ${position}`
    }else {
        return `El numero ${numeroBuscado} no se encuentra en el arreglo`
    }

}

console.log(busquedaBinaria(setDatos, 40))

