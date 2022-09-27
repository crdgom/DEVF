


// funciones de flecha


// declaración de la función normal:

function elevarPotencia(n,p){
    return n ** p;
}

console.log(elevarPotencia(9,3));

// Función como valor 

let elevarPotencia1 = function(n,p){
    return n ** p;
}

console.log(elevarPotencia1(9,3));


// Función como valor con arrow function

let elevarPotencia2 =  (n,p) => n ** p;

console.log(elevarPotencia2(9,3));


// Función como valor con arrow function y sin paréntesis

let array = [1,2,3,4,5];

let sumarArray1 = (arr) =>{
    let suma = 0;

    for(let i = 0; i < arr.length; i++){
        
        suma += arr[i];
    }
    
    return suma;
}

console.log(sumarArray1(array));

let sumarArray = array.reduce((a,b) => a + b);

console.log(sumarArray);