// # Operadores y Estructuras

/*
    *************************
    ************************* 
    ************************* 
        OPERADOR + (SUMA)
    ************************* 
    ************************* 
    ************************* 
*/

// SUMA DOS O MÁS NÚMEROS

let suma1 = 20 + 20;
console.log(suma1);

// SIRVE PARA CONCATENAR DOS O MÁS CADENAS DE CARACTERES

let cadena1 = "Hola"
let cadena2 = "Mundo"
console.log(cadena1 + cadena2);

// TAMBIÉN SIRVE PARA SUMAR UN TRUE

let numero2 = 5;
let statement = true;
console.log(numero2 + statement) // como true vale 1 a nivel maquina en vez de concatenar suma el valor de true

/*
    *************************
    ************************* 
    ************************* 
        OPERADOR - (resta)
    ************************* 
    ************************* 
    ************************* 
*/

// RESTA DOS O MÁS NÚMEROS

let resta1 = 20 - 10;
console.log(resta1);

// ! NO! SIRVE PARA RESTAR DOS O MÁS CADENAS DE CARACTERES

let cadena3 = "Hola"
let cadena4 = "Mundo"
console.log(cadena3 - cadena4);

// TAMBIÉN SIRVE PARA RESTAR UN TRUE

let numero3 = 5;
let statement1 = true;
console.log(numero2 - statement1) // como true vale 1 a nivel maquina en vez de concatenar suma el valor de true

/*
    *************************
    ************************* 
    ************************* 
      OPERADOR * (producto)
    ************************* 
    ************************* 
    ************************* 
*/

// MULTIPLICA DOS O MÁS NÚMEROS

let multiplicacion = 20 * 10;
console.log(multiplicacion);

// ! NO! SIRVE PARA MULTIPLICAR DOS O MÁS CADENAS DE CARACTERES

let cadena5 = "Hola"
let cadena6 = "Mundo"
console.log(cadena5 * cadena6);

// TAMBIÉN SIRVE PARA MULTIPLICAR UN TRUE

let numero4 = 5;
let statement2 = false;
console.log(numero4 * statement2) // como true vale 1 a nivel maquina en vez de concatenar multiplica el valor de true

/*
    *************************
    ************************* 
    ************************* 
      OPERADOR / (division)
    ************************* 
    ************************* 
    ************************* 
*/

// DIVIDE DOS O MÁS NÚMEROS

let division = 20 / 10;
console.log(division);

// ! NO! SIRVE PARA DIVIDIR DOS O MÁS CADENAS DE CARACTERES

let cadena7 = "Hola"
let cadena8 = "Mundo"
console.log(cadena7 / cadena8);

// TAMBIÉN SIRVE PARA DIVIDIR UN TRUE

let numero5 = 5;
let statement3 = true;
console.log(numero5 / statement3) // como true vale 1 a nivel maquina en vez de concatenar divide el valor de true

/*
    *************************
    ************************* 
    ************************* 
      OPERADOR % (modulo)
    ************************* 
    ************************* 
    ************************* 
*/

// PRIMERO CUANTAS VECES CABE EL SEGUNDO NÚMERO EN EL PRIMERO Y DEVUELVE EL RESTANTE EN ENTERO

let modulo = 20 % 10; // 10 * 2 = 20 PARA 20 = 0
console.log(modulo);

let modulo1 = 15 % 7; // 7 * 2 = 14 PARA 15 = 1
console.log(modulo1);

let modulo2 = 15 % 6; // 6 * 2 = 12 PARA 15 = 3
console.log(modulo2);

/*
    *************************
    ************************* 
    ************************* 
    OPERADOR ++ (incremento)
    ************************* 
    ************************* 
    ************************* 
*/

// INCREMENTA EN UNO (MUY COMÚN EN CICLOS)

let variable1 = 2;
console.log(++variable1)

/*
    *************************
    ************************* 
    ************************* 
    OPERADOR -- (decremento)
    ************************* 
    ************************* 
    ************************* 
*/

// DECREMENTA EN UNO (MUY COMÚN EN CICLOS)

let variable2 = 2;
console.log(--variable2)
