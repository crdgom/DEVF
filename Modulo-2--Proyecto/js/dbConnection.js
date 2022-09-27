/*

    * dbConnection designed to emulate a real no-SQL connection for JSON collections.
    * Author: Carlos Moctezuma
    * Version: 1.0
    * Contact: crdgom/github.io
    * License: Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)

*/

// import the user data from user-data.json
//import users from '../user-data.js';

function getData(){
    let userInput = document.getElementById('user-input').value;
    let passwordInput = document.getElementById('user-password').value;

    console.log(userInput);
    console.log(passwordInput);
}

export default getData;