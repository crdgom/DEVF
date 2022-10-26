class Stack {
    constructor(){
        this.stack = [];
    }

    // metodo para agregar un elemento al stack (push)

    push(element){
        this.stack.push(element);  // recibe un elemento y lo agrega al stack siempre al final
        return this.stack;
    }

    // metodo para eliminar un elemento del stack (pop)

    pop(){
        return this.stack.pop() // elimina el ultimo elemento del stack y lo devuelve
    }

    // metodo para ver el ultimo elemento del stack (peek)

    peek(){
        return this.stack[this.stack.length - 1]  // devuelve el ultimo elemento del stack
    }

    size(){
        return this.stack.length // devuelve el tamaño del stack
    }

    print(){
        console.log(this.stack) // imprime el stack
    }

    isEmpty(){
        return this.stack.length == 0 // devuelve true si el stack esta vacio
    }

    clear(){
        this.stack = [] // vacia el stack
    }


}

const queue = new Stack();

console.log(queue.isEmpty()) // true
console.log(queue.push("Azul")) 
console.log(queue.push("Esmeralda"))
console.log(queue.push("verde"))
console.log(queue.push("Amarillo"))  
console.log(queue.push("Rojo"))

console.log(queue.size())

console.log(queue.peek())

console.log(queue.pop())
console.log(queue.size())

console.log(queue.pop())
console.log(queue.size())

console.log(queue.pop())
console.log(queue.size())

