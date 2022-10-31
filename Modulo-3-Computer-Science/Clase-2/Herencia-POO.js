console.log("herencia")

// clase Principal o Super Clase

class Person{
    constructor(name, lastname, age){

        this.name = name
        this.lastname = lastname
        this.age = age

    }

    // creamos un metodo llamado saludar

    saludar(){
        console.log(`Hola soy  ${this.name}`)
    }

    // Ceamos un metodo caminar

    caminar(){
        console.log('Estoy caminando')
    }
}

// creamos la instancia de clase
let person1 = new Person('Diego', 'Lopez', 10)
// mostramos en consola
console.log(person1)
// Llamamos al metodo saludar

person1.saludar()

// tambien podemos llamar al método caminar

person1.caminar()

// Subclase
// Se define con la palabra EXTENDS para traer las propiedades y métodos de la Super Clase

class Alumni extends Person{
    constructor (name, lastname, age, notes, grade, school){
        super (name, lastname, age)
        this.notes = notes
        this.grade = grade
        this.school = 'Niños Heroes'
    }

    // las subclases tambien pueden contener métodos propios

    reprobar(){
        console.log("Reprobé")
    }
}

// creamos la instancia de Alumno
let alumni1 = new Alumni ('Julio', 'Alvarez', 50)
// lo mostramos en consola
console.log(alumni1)

// tambien podemos llamar a los metodos por la herencia

alumni1.saludar()
alumni1.caminar()

alumni1.reprobar()

// pero el método reprobar no puede ser accedido por la Super Clase

// ! person1.reprobar()

// Creamos la clase empleado desde la clase Persona

class Empleado extends Person{
    constructor (name, lastname, age, seniority, salary, savings){
        super (name, lastname, age)
        this.seniority = seniority
        this.salary = salary
        this.savings = 10000
    }

    gastar(){
        this.salario = salario - cantidad
    }
}

// Creamos la instancia de la clase Empleado

let empleado1 = new Empleado('Roberto', 'Gomez', 36, '20 años', 50000)

console.log(empleado1)