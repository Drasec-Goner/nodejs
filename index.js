const q = require('lodash');

const numbers = [1,2,3,4,5];

const doubledNumbers = q.map(numbers, n=> n*2);

console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubledNumbers);

const a = require('./add.js');

let p= a.add(2,4);
console.log(p);

const b = require('./subtract.js');

let d = b.subtract(5,2);
console.log(d);