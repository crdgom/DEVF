/* 
    Crea una función llamada numbers() que retorne un array donde se visualicen
    los números del 1 al 10, y a la vez, una cuenta inversa de 10 a 1 
     Esto debe retornar un array [1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 6, 5, 7, 4, 8, 3, 9, 2, 10, 1]
*/

function numbers(){
    let n = []
    for (let i = 1; i <= 10; i++){
        n.push(i)
        n.push(11-i)
    }
    return n
}