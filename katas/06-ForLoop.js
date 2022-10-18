// Crear un ciclo for o while que almacene en un array llamado pares
// los numeros pares que hay entre el 0 y el 100, empezando desde 0


let pares = []

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        pares.push(i)
    }
}

console.log(pares)




/* let pares = [];

for(let i; i <= 100; i++){
    if(i%2){
        pares.push(i);
    }
}

console.log(pares) */