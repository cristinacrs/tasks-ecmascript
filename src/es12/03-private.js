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

    //metodo privado al agregar #
    set #uAge(n){
        this.age = n;
    }
}

const Keisi = new user('Keisi', 5);
console.log(Keisi.uAge);
console.log(Keisi.uAge = 3);