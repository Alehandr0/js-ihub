var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];


"use strict";

(function () {
	var listBlock = document.getElementById("app");
	var listItem = document.createElement("li");
	todos.forEach(function(item, i, arr) {		
		var listItem = document.createElement("li");
		listItem.innerHTML=item;
		listBlock.appendChild(listItem);
	});



	listBlock.addEventListener('click', function(e) {
	    if (e.target.tagName === 'LI'){
	    	if(e.target.className == "done"){
				e.target.className = " ";
	    	}
	    	else{
	    		e.target.className = "done";
	    	}
	    	
	     
	    }
	});

	
})();

// На моём localhost Ваш код не запустился
