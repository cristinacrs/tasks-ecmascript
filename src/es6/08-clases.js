//declarando
class User { };

//instancia de una clase
//const newUser = new User;

class user {
    //metodos
    greeting() {
        return 'Hello';
    }
};

const gndx = new user;
console.log(gndx.greeting());

//Herencia
const developer = new user;
console.log(developer.greeting());

//Constructor 
//metodo especial para crear e inicializar un objeto creado a partir de una clase

class user {
    //constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
};

const cris = new user();

//this (hace referencia al elemento padre)

class user {
    //constructor
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hello';
    }
    greeting() {
        return `${(this.speak())} ${this.name}`;
    }
};

const freya = new user('Freyis');
console.log(freya.greeting())

//setters and getters

class user {
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting() {
        return `${(this.speak())} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const Keisi = new user('Keisi', 5);
console.log(Keisi.uAge);
console.log(Keisi.uAge = 3);