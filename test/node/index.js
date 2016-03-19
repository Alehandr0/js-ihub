var calculator = require('./calculator')(function(expr){
    if (typeof expr !== 'string') {
        return 'TypeError: Expression should be a string.';
    } else {
        try {
            return eval(expr);
        } catch (err) {
            return 'Error: "' + expr + '" is not valid expression.';
        }
    }
});


console.log(calculator('40 + 2')); // 42

console.log(calculator(123)); // TypeError: Expression should be a string.

console.log(calculator('40 + hello')); // Error: "40 + hello" is not valid expression.
