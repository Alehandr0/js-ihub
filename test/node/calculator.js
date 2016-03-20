module.exports = function calculator(expr) {
    if (typeof (expr) != "string")
        return 'TypeError: Expression should be a string.';
    else try {
        return eval(expr);
    }
    catch (err) {
        return 'Error: "' + expr + '" is not valid expression.';
    }
};