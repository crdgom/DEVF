// Algorithm Quick Sort (Ordenamiento por Selección)

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[arr.length - 1]

    const left = []
    const right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

//const arr = [5, 3, 1, 4, 2, 3, 10, 7, 6, 9, 8]

//console.log(quickSort(arr))


const quickSort2 = (arr) => {

    if (arr.length <= 1){
        return arr
    }

    let pivot = arr[0]
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return quickSort2(left).concat(pivot, quickSort2(right))
}

const arr2 = [5, 3, 1, 4, 2, 3, 10, 7, 6, 9, 8]

console.log(quickSort2(arr2))

const precios = [100.01,100.02,100.3, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

console.log(quickSort2(precios))