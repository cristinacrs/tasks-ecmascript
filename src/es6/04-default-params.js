function newUser(name, age, country){
    var name = name || 'Cris';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Jorge', 25, 'MX');

function newAdmin(name = 'Cris', age = 23, country = 'MX'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Fany', 30, 'MX');
