const user = {username: 'cris', age: 23, country: 'MX'};

const {username, ... values} = user;

console.log(username);
console.log(values);