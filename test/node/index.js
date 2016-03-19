var _calculator = require('./calculator');

function calculator(expr){

    if (typeof expr !== 'string')
        return "TypeError: Expression should be a string.";

    try {
        return _calculator.apply(this, arguments);
    }
    catch (e) {
        return 'Error: "' + expr + '" is not valid expression.';
    }
}

console.log(calculator('40 + 2')); // 42

console.log(calculator(123)); // TypeError: Expression should be a string.

console.log(calculator('40 + hello')); // Error: "40 + hello" is not valid expression.
