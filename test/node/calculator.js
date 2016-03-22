module.exports = function calculator(expr)
  {
    if (typeof(expr) != "string") return 'TypeError: Expression should be a string.';
    else
    try
	    {
        return eval(expr);
	    }
      catch(error)
	    {
      return 'Error: "'+expr+'" is not valid expression.';
    }
}
