class Queue{

    constructor(){
        this.queue = []
    }

    enQueue(element){
        this.queue.push(element)
    }

    deQueue(){
        return this.queue.shift()
    }

    peek(){
        return this.queue[0]
    }

    isEmpty(){
        return this.queue.length === 0
    }

    size(){
        return this.queue.length
    }

    print(){
        console.log(this.queue)
    }

    isEmpty(){
        return this.queue.length == 0
    }

    clear(){
        this.queue = []
    }

    front(){
        return this.queue[0]
    }

    back(){
        return this.queue[this.queue.length - 1]
    }

}


const queue = new Queue();

console.log(queue.isEmpty()) // true
console.log(queue.enQueue("Azul")) 
console.log(queue.enQueue("Esmeralda"))
console.log(queue.enQueue("verde"))
console.log(queue.enQueue("Amarillo"))  
console.log(queue.enQueue("Rojo"))

console.log(queue.size())

console.log(queue.peek())

console.log(queue.deQueue())
console.log(queue.size())

console.log(queue.deQueue())
console.log(queue.size())

console.log(queue.deQueue())
console.log(queue.size())