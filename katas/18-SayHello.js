/* Crea una variable llamada idioma, que contenga un array con tres elementos,
    ‘Español’, ’Inglés’, ’Francés’. Posteriormente crea una función llamada saludo(),
    que reciba como parámetros un idioma ‘Español’, ’Inglés’, ’Francés’. Y que retorne:

Retorne Hola hacker, en caso de elegir Español
Retorne Hello hacker, en caso de elegir Inglés
Retorne Bonjour hacker, en caso de elegir Francés */

let idioma = ["Español", "Inglés", "Francés"]

function saludo(idioma){
    switch(idioma){
        case "Español":
            return "Hola hacker"
            break
        case "Inglés":
            return "Hello hacker"
            break
        case "Francés":
            return "Bonjour hacker"
            break
    }
}