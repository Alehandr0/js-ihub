module.exports = function calculator(expr) {

	try{
		if ((typeof expr) !== "string" ) {

			console.log('TypeError: Expression should be a string.');

		}
		else{

		  	return eval(expr);

		}; 

	}
	catch(err){

		console.log('Error: "' + expr + '" is not valid expression.');	
		
	} 	
}
