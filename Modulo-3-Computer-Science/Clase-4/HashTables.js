/// * crear una tabla hash

/* class HashTable {
    constructor (){
        this.table = new Array(127)
        this.size = 0
    }

    _hash(key){
        let hash = 0
        
        // la mgia de la funcion hash

        // si recibimos hola omo texto, hola equivale a los siguentes
        // valores h = 104, o = 111, l = 108, a = 97 y sumamos todos los valores 104 + 111 + 108 + 97 = 420

        // para evitar que el valor sea muy grande, lo dividimos entre el tamaño de la tabla y el resto de la division lo guardamos en la variable hash
        // 420 % 127 = 42

        // para evitar que el valor sea negativo, lo sumamos con el tamaño de la tabla
        // 42 + 127 = 169

        for (let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
            for (let i = 0; i < key.length; i++){
                hash += key.charCodeAt(i)
            }
        }
        
        return hash % 127
    }

    set(key, value){
        const index = this._hash(key)
        this.table[index] = [key ,value]
        this.size++
    }

    get(key){
        const index = this._hash(key)
        return this.table[index]
    }

    delete(key){
        const index = this._hash(key)

        if (this.table[index] && this.table[index].length){
            this.table[index] = undefined
            this.size--
            return true        
        }else{
            return false
        }

    }
}


const hT = new HashTable()

console.log(hT.size)
hT.set('hola', 'mundo')
console.log(hT.size)
console.log(hT.get('hola'))
console.log(hT.size)
hT.set('aloh', 'odnum')
console.log(hT.size)
console.log(hT.get('aloh'))
console.log(hT.size) */



// HashTable con error

/* class HashTable {
    constructor () {
        this.table = new Array(127)
        this.size = 0
    }

    _hash(key) {
      let hash = 0;

      for (let i = 0; i < key.length; i++) {
        hash = hash + key.charCodeAt(i)
      }

      // return hash % 127 y agregar 3 decimales

      return hash % 127
    }

    set(key, value) {
        const index = this._hash(key)
        this.table[index] = [key, value]
        this.size++
    }

    get(key) {
        const index = this._hash(key);
        return this.table[index]
    }

    remove(key) {
        const index = this._hash(key);

        if (this.table[index] && this.table[index].length) {
            this.table[index] = undefined
            this.size--;
            return true
        } else {
            return false
        }
    }
} */



// hash table sin error

class HashTable {
    constructor () {
        this.table = new Array(127)
        this.size = 0
    }

    _hash(key) {
      let hash = 0;

      for (let i = 0; i < key.length; i++) {
        hash = hash + key.charCodeAt(i)
      }

      return hash % 127;
    }

    set(key, value) {
        const index = this._hash(key)

        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value
                    return;
                }
            }
            this.table[index].push([key, value]);
        } else {
            this.table[index] = []
            this.table[index].push([key, value])
        }
        this.size++
    }

    get(key) {
        const index = this._hash(key);

        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1]
                }
            }
        }

        return undefined
    }

    remove(key) {
        const index = this._hash(key);

        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1)
                    this.size--
                    return true
                }
            }
        } else {
            return false
        }
    }
}