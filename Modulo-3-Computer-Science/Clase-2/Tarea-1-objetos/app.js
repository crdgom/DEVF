/* class Person{
    constructor(pName, age, gender, interests, bio, picture){
        this.pName = pName[];
        this.age = age;
        this.gender = gender
        this.interests = interests;
        this.picture = picture;
    }
}

const person = new Person(["John", "doe"], 32, "Male", ["I like to play video games", "Cooking", "reeding", "Programing"]);

console.log(person.pName); */


class Person{
    constructor (name = [], age=0, gender = ["Male" || "Female"], interests = [], bio, picture){
        this.name = name;
        this.age = age;
        this.gender = gender
        this.interests = interests;
        this.bio = bio;
        this.picture = picture;
}

    setName(name){
        this.name = name;
        for (let i = 0; i== name.length; i++){
            this.name.push(name[i]);
            return ` ${this.name} `;
        }
    }


    setInterests(interests){
        this.interests = interests;
        for (let i = 0; i == interests.length; i++){
            this.interests.push(interests[i]);
            return ` ${this.interests} `; 
        }
        
    }

    getBio(){
        return `${this.name} is ${this.age} years old. its a ${this.gender}, and  likes ${this.interests} `;
    }

}



const p1 = new Person([], 39, "duck", [], "hola", "foto");

p1.setName(["fernando", "alvárez"])

p1.setInterests(["I like to play video game", "Cooking", "reeding", "Programing"]);

console.log(p1.getBio());