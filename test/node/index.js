var calculator = require('./calculator.js');

console.log(calculator('40 + 2')); // 42

console.log(calculator(123)); // TypeError: Expression should be a string.

console.log(calculator('40 + hello')); // Error: "40 + hello" is not valid expression.
