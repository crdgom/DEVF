/*

    * dbConnection designed to simulate a real no-SQL connection for JSON collections.
    * Author: Carlos Moctezuma
    * Version: 1.0
    * Contact: crdgom/github.io
    * License: Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)

*/


// Defining github "connection"

async function dbConnect(){

    // Guardamos la url a la que haremos la petición dentro de una constante
    const requestURL= "url of the json file";

    // generamos un objeto request pasando la constante definida anteriormente
    const request = new Request(requestURL);

    // construimos una respuesta asincrona y buscamos la respuesta
    const response = await fetch(request);

    // Si la respuesta devuelve 200 (ok) tratamos la respuesta como JSON
    const bankClient = await response.json()
}