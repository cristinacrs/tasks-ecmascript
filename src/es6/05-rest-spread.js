//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a, fruits[1]);

//Object destructuring

let user = {username: 'Cris', age:23};
let {username,age} = user;
console.log(username, user.age);

// spread operator

let person = {name:'cris', age: 23};
let country = 'MX';

let data = {id:1,...person, country };
console.log(data);

// rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(3,2,1,1,1);

