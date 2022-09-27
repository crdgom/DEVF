/*

    * 1. Desarrolla un método para verificar si una palabra es un palíndromo.
    * Casos de prueba: var word1 = 'madam' var word2 = 'computadora'

*/

let word1 = 'madam';
let word2 = 'computadora';

function isPalindrome(word){
    let wordReverse = word.split('').reverse().join('');
    return wordReverse === word;
}

console.log(isPalindrome(word1));
console.log(isPalindrome(word2));