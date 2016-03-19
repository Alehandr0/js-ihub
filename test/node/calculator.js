module.exports = function calculator(expr) {
    if (typeof expr === 'string'){
        try{
            var res = eval(expr);
        }
        catch(e){
            res = 'Error: ' + expr +' is not valid expression.';
        }
        finally {
            return res;
        }
    }
    else
        return 'TypeError: Expression should be a string.';
 }