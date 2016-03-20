module.exports = function calculator(expr) { 
  answer = undefined;
  if ('string' != typeof expr) { 
  	answer = 'TypeError: Expression should be a string.'
  } else { 
  		try { 
  			answer = eval(expr) 
  		} catch(er) { 
  			answer = 'Error: "' + expr + '" is not valid expression.' 
  		}
  	};

  return answer; 
} 
