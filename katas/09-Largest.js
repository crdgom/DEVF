// Crea una función llamada largest que reciba como parámetro un arreglo de números,
// esta función debe retornar el número más grande del arreglo.

function largest(a){
    let largest = 0
    for (let i = 0; i < a.length; i ++){
        if (a[i] > largest){
            largest = a[i]
        }
    }
    return largest
}