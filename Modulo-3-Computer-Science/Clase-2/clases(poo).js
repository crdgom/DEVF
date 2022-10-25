// como crear un prototipo


function Punto2D(x,y){
    this.x = x;
    this.y = y;
}

let p1 = new Punto2D(3,5);
let p2 = new Punto2D(4,4);

Punto2D.prototype

Punto2D.prototype.mover = function (x,y){
    this.x += x;
    this.y += y;
}

p2.mover(2,4);


Punto2D.prototype.regresar = function(){
    this.x = 0;
    this.y = 0;
};

Punto2D.prototype.regresar2 = (x,y) => {x=0;y=0};


class Punto3D {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    mover(x,y,z){
        this.x += x;
        this.y += y;
        this.z += z;
    }

    regresar(){
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
}


/// Creando una nueva intancia de clase

const p3d = new Punto3D(3,4,5);

p3d.mover(2,3,4);

p3d.regresar();


/// como crear un objeto

class Animal{
    constructor (tipo, nombre, edad){
        this.tipo = tipo;
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(){
        return `Soy $[this.nombre} y estoy comiendo`;
    }

    caminar(){
        return `Soy $[this.tipo}, tengo ${this.edad} años y estoy caminando`;
    }

    __str__(){
        return `Soy un ${this.tipo} y me llamo ${this.nombre}`;
    }
}


const bruce = new Animal("Perro", "Bruce", 4);

const garfield = new Animal("Gato", "Garfield", 6);

console.log(bruce.__str__());


/// crear una clase persona

class Persona{
    constructor(name, age,  ){}
}



// encapsulamiento

class Collar{
    constructor(color, material){
        this.color = color;
        this.material = material;
    }

    cambiarColor(color){
        this.color = color;
    }

    cambiarMaterial(material){
        this.material = material;
    }
}


const collar = new Collar("rojo", "cuero");

console.log(collar.color);

collar.cambiarColor("azul");

console.log(collar.color);


// polimorfismo

class Figuras{
    constructor (base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea () {
        return this.base * this.altura;
    }
}



const cuadrado = new Figuras(5,5);
const rectangulo = new Figuras(3,9);
const triangulo = new Figuras(3,3);


triangulo.calcularArea = function () { 
    return base * altura / 2
}

console.log(cuadrado.calcularArea());
console.log(rectangulo.calcularArea());
console.log(triangulo.calcularArea());


// herencia

class Animales{
    constructor (tipo, nombre, edad){
        this.tipo = tipo;
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(){
        return `Soy ${this.nombre} y estoy comiendo`;
    }

    caminar(){
        return `Soy ${this.tipo}, tengo ${this.edad} años y estoy caminando`;
    }

    __str__(){
        return `Soy un ${this.tipo} y me llamo ${this.nombre}`;
    }
}