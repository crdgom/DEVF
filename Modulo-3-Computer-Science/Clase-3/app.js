// estructura de datos

/* 

    Son formas de organizar informacion para manupular, buecar e insertar datos

*/


/* 

En ciencias de la computacion y programacion, una estructura de datos es una coleccion de valores, el relacionamiento entre ellos y las funciones o operaciones que se pueden aplicar a los datos.

*/


// Estructura de datos Lineales

/* 

    1.- Array
    2.- Listas Enlazadas
    3.- Pilas
    4.- Colas

*/



// Array

let arr = [1,6,4,9,5,2,8,3,7];  // tenemos un array declarado

let result // variable para guardar el resultado

// Metodo PUSH

arr.push(999) // agregamos un elemento al final del array

console.log(arr) // imprimimos el array

// Metodo POP

arr.pop() // eliminamos el ultimo elemento del array

console.log(arr) // imprimimos el array


// Metodo ForEach

arr.forEach(el => console.log(el)) // recorremos el array con el metodo forEach)


// Método MAP

result = arr.map(el => console.log("elemento " + el)) // devuelve un nuevo array con los elementos modificados o no

// Método FILTER

result = arr.filter(el => el > 5) // devuelve un nuevo array con los elementos que cumplan la condicion (en este caso los elementos que sean mayores a 5)

console.log(result) // imprimimos el resultado
// Método FIND

result = arr.find(el => el > 5) // devuelve el primer elemento que cumpla la condicion (en este caso el primer elemento que sea mayor a 5)

console.log(result)



// Pilas o Stacks

// una pila es una estructura de datos que funciona bajo el principio LIFO (Last In First Out) o Ultimo en entrar, primero en salir
// unidireccional, solo se puede acceder al ultimo elemento agregado

let platos = [] // creamos una pila vacia


// Metodo PUSH

platos.push("plato 1") // agregamos un elemento a la pila

console.log(platos) // imprimimos la pila

platos.push("plato 2") // agregamos un elemento a la pila

console.log(platos) // imprimimos la pila

platos.push("plato 3") // agregamos un elemento a la pila

console.log(platos) // imprimimos la pila

// Metodo POP

platos.pop() // eliminamos el ultimo elemento de la pila

console.log(platos) // imprimimos la pila

// Metodo PEEK

console.log(platos[platos.length - 1]) // imprimimos el ultimo elemento de la pila

// Metodo LENGTH

console.log(platos.length) // imprimimos la longitud de la pila

// Metodo Size

console.log(platos.size) // imprimimos la longitud de la pila

// Metodo PRINT

console.log(platos) // imprimimos la pila


// Queue o Colas

// una cola es una estructura de datos que funciona bajo el principio FIFO (First In First Out) o Primero en entrar, primero en salir
// unidireccional, solo se puede acceder al primer elemento agregado

let cola = [] // creamos una cola vacia

// Metodo enQueue Agrerga un elemento a la cola

cola.enQueue("elemento 1") // agregamos un elemento a la cola

console.log(cola) // imprimimos la cola

cola.push("elemento 2") // agregamos un elemento a la cola

console.log(cola) // imprimimos la cola


// Listas Enlazadas

// una lista enlazada es una estructura de datos que funciona bajo el principio LIFO (Last In First Out) o Ultimo en entrar, primero en salir
// bidireccional, se puede acceder al ultimo elemento agregado y al primer elemento agregado

let lista = [] // creamos una lista vacia

// Metodo PUSH

lista.push("elemento 1") // agregamos un elemento a la lista

console.log(lista) // imprimimos la lista

lista.push("elemento 2") // agregamos un elemento a la lista

console.log(lista) // imprimimos la lista


