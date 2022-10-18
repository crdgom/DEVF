/* Crea una función llamada longestCountry(), esta función recibirá de parámetro un arreglo
con nombres de distintos países, la función deberá retornar el país con mayor número de letras.

Por ejemplo, del siguiente arreglo de países:
const paises = ["México", "Panamá", "Guatemala", "El Salvador"]
El Salvador es el país con mayor número de letras. */

function longestCountry(countries){
    let country = countries[0]
    for (let i = 0; i < countries.length; i++){
        if (countries[i].length > country.length){
            country = countries[i]
        }
    }
    return country
}