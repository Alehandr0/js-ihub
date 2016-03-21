var calculation = require('./calculator.js');

function calculator(inValue) {
    if (typeof inValue === 'string' || inValue instanceof String) {
        try {
            return calculation(inValue);
        } catch (e) {
          return 'Error: "' + inValue + '" is not valid expression.';
        } 
    } else {
      return 'TypeError: Expression should be a string.';
    }
}

console.log(calculator('40+2'));
console.log(calculator(123));
console.log(calculator('40 + hello'));
