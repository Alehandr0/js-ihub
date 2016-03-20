
    var makeCalculation = require('./calculator');

    function calculator(expression) {

        var isValidExpression = expressionValidator(expression),
            isValidTypeExpression = expressionTypeValidator(expression),
            typeErrorMsg = 'TypeError: Expression should be a string.',
            errorMsg = 'Error: "' + expression +'" is not valid expression.';

        if (isValidTypeExpression && isValidExpression) {
            // additional check, in case something is wrong
            try {
                return makeCalculation(expression);
            }
            catch(err) {
                return errorMsg
            }
        }
        if (!isValidTypeExpression) return typeErrorMsg;
        if (!isValidExpression) return errorMsg;

    }

    function expressionValidator(expression){
        var template = new RegExp("^[\\d\\+\\/\\*\\.\\- \\(\\)]*$");
        return template.test(expression);
    }

    function expressionTypeValidator(expression) {
        return typeof expression == 'string'
    }

    console.log(calculator('40 + 2')); // 42

    console.log(calculator(123)); // TypeError: Expression should be a string.

    console.log(calculator('40 + hello')); // Error: "40 + hello" is not valid expression.



