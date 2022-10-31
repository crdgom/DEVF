function spinWords(text){
    word = text.map().reverse().join()
    return word

}

console.log(spinWords("Hello word"))


// crear funcion que voltee fraces

function spinWords(text){
    word = text.split(" ").map(function(word){
        return (word.length >= 5) ? word.split("").reverse().join("") : word;
    }).join(" ");
    return word;
}
