// * Algorithm Insertion Sort (Ordenamiento por Inserción)

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let aux = arr[i]

        console.log(`i: ${i}`)

        while (j >= 0 && arr[j] > aux) {
            arr[j + 1] = arr[j]
            j--

            console.log(`j: ${j}`)
        }



        arr[j + 1] = aux

        console.log(`arr: ${arr}`)
    }

    return arr
}

//const arr = [5, 3, 1, 4, 2, 3, 10, 7, 6, 9, 8]

//console.log(insertionSort(arr))

const arr2 = [5,2,4,6,1,3]

console.log(insertionSort(arr2))


const insertionSort2 = (arr) => {
    for (let i = 0; i < arr.length; i++){

        for (let j = i; j > 0 && arr[j] < arr[j-1] ; j--){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
        }
    }
    return arr
}

const arr3 = [5, 3, 1, 4, 2, 3, 10, 7, 6, 9, 8]

console.log(console.profile())
console.log(insertionSort2(arr3))
console.log(console.profileEnd())