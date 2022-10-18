/* Crea una función llamada palindrome() que reciba como parametro una oración,
si la oración es un palíndromo la función deberá devolver true en otro caso, devolver false */

function palindrome(sentence){
    let newSentence = sentence.toLowerCase().replace(/ /g, '')
    console.log(newSentence)
    let newSentenceReverse = newSentence.split('').reverse().join('')
    console.log(newSentenceReverse)
    if (newSentence === newSentenceReverse){
        return true
    }else {
        return false
    }
}