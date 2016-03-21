var calculator = require("./calculator.js");

console.log(calculator('84 + 4')); // 88

console.log(calculator(475)); // TypeError: Expression should be a string.

console.log(calculator('788 + alex')); // Error: "788 + alex" is not valid expression.
