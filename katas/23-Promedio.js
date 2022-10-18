/* 
    Crea una función llamada promedio() que reciba como parámetro un arreglo
    de números positivos, retorna el promedio de todos los elementos
    NOTA: puedes utilizar forOf() 
*/

function promedio(arr){
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}