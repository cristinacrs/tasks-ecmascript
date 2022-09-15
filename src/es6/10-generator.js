function* iterate(array){
    for (let value of array){
        yield value;
    }
}


// Recuerda su estado
const it = iterate(['cris', 'lana', 'freya', 'keisi', 'pelusa']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);