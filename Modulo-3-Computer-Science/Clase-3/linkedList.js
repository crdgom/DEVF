// Linked Lists are a data structure that contains a head, tail and length property
// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
//

// lista enlazada simple

class Node {
    constructor(data){
        this.data = data;  // valor del nodo
        this.next = null;  // puntero al siguiente nodo
        // this.previous = null;   // puntero al nodo anterior
    }

}

class LinkedList {
    constructor(){
        this.head = null; // puntero al primer nodo
        this.currenSize = 0;  // tamaño de la lista
    }

    // metodo para agregar un nodo al final de la lista

    add(data){
        const node = new Node(data); // creamos un nuevo nodo con el valor que recibe el metodo

        if(this.head == null){  // si la lista esta vacia
            this.head = node;  // el nuevo nodo sera el primer nodo de la lista
        }else{
            let current = this.head; // creamos un puntero que apunte al primer nodo de la lista

            while(current.next != null){  // recorremos la lista hasta llegar al ultimo nodo
                current = current.next;  // movemos el puntero al siguiente nodo
            }

            current.next = node;  // agregamos el nuevo nodo al final de la lista
        }

        this.currenSize++;  // incrementamos el tamaño de la lista
    }

    // metodo para eliminar un nodo de la lista

    remove(data){
        if (this.head == null) {  // si la lista esta vacia
            return null;  // retornamos null
        }

        let current = this.head;  // creamos un puntero que apunte al primer nodo de la lista
        let previous = null;  // creamos un puntero que apunte al nodo anterior al nodo actual

        while(current != null){  // recorremos la lista hasta llegar al ultimo nodo
            previous = current;  // movemos el puntero al nodo anterior al nodo actual
            current = current.next;  // movemos el puntero al siguiente nodo
        }

        if(previous == null){  // si el nodo anterior es null
            this.head = current.next;  // el primer nodo de la lista sera el siguiente nodo
        }else{
            previous.next = current.next;  // eliminamos el nodo actual de la lista
        }

        this.currenSize--;  // decrementamos el tamaño de la lista

        return data;  // retornamos el valor del nodo eliminado

    }

    // Metodo para ver el tamaño de la lista

    size(){
        return this.currenSize;  // retornamos el tamaño de la lista
    }

    // Metodo para imprimir la lista

    print(){
        let current = this.head;  // creamos un puntero que apunte al primer nodo de la lista

        while(current != null){  // recorremos la lista hasta llegar al ultimo nodo
            console.log(current.data);  // imprimimos el valor del nodo actual
            current = current.next;  // movemos el puntero al siguiente nodo
        }
    }

    isEmpty(){
        return this.head === null  // retornamos true si la lista esta vacia
    }

    clear(){
        this.head = null;  // vaciamos la lista
    }

    getFirst(){
        if (this.head === null) {  // si la lista esta vacia
            return null;  // retornamos null
        }else{
            return this.head.data;  // retornamos el valor del primer nodo de la lista
        }
    }

    getLast(){
        if (this.head === null) {  // si la lista esta vacia
            return null;  // retornamos null
        }else{
            let current = this.head;  // creamos un puntero que apunte al primer nodo de la lista

            while(current.next != null){  // recorremos la lista hasta llegar al ultimo nodo
                current = current.next;  // movemos el puntero al siguiente nodo
            }

            return current.data;  // retornamos el valor del ultimo nodo de la lista
        }
    }

    search(data){
        if (this.head === null) {  // si la lista esta vacia
            return null;  // retornamos null
        }else{
            let current = this.head;  // creamos un puntero que apunte al primer nodo de la lista

            while(current != null){  // recorremos la lista hasta llegar al ultimo nodo
                if(current.data === data){  // si el valor del nodo actual es igual al valor que buscamos
                    return current.data;  // retornamos el valor del nodo actual
                }
                current = current.next;  // movemos el puntero al siguiente nodo
            }

            return null;  // retornamos null
        }
    }

}