// * Algorithm Merge Sort (Ordenamiento por Mezcla)

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)

    console.log(`middle: ${middle}`)

    const left = arr.slice(0, middle)

    console.log(`left: ${left}`)


    const right = arr.slice(middle)

    console.log(`right: ${right}`)

    return merge(mergeSort(left), mergeSort(right))


}

const merge = (left, right) => {
    let result = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length) {
        result.push(left.shift())
    }

    while (right.length) {
        result.push(right.shift())
    }

    return result
}

const arr = [5, 3, 1, 4, 2, 3, 10, 7, 6, 9, 8]

console.log(mergeSort(arr))


constant mergeSort2 = (arr) => {

    