// * Algorithm Bubble Sort (Ordenamiento Burbuja)

const bubbleSort = (arr) => {
    let sentinel = true
    for (let i = 0; sentinel && i < arr.length - 1 ; i++){
        change = false

        for (let j = 0; j < arr.length - i -1; j++){
            if (arr[j] > arr[j+1]) {
                // common code to swap two elements

                /* let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
                change = true */+

                // restructuring code to swap two elements whith destructuring

                [arr[j], arr[j+1]] ; [arr[j+1], arr[j]]

                change = true;
                }
            }
        }

    }
    return arr
}

const arr = [5, 3, 1, 4, 2, 10, 7, 6, 9, 8]

console.log(bubbleSort(arr))


