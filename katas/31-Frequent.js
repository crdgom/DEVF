/* Crea una funcion llamada frequent() que recibirá de parámetro un arreglo con distintos números,
retornar el elemento más frecuente dentro del arreglo. */

function frequent(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > 1) {
            return arr[i];
        }
    }
    }