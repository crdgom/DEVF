/*

    * 2. Escribe un método que retorne el elemento mayor
    * del arreglo dado: arr = [45, 56, 32, 98, 1000, 5, 23]

*/

let arr = [45, 56, 32, 98, 1000, 5, 23];

function getMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax(arr));