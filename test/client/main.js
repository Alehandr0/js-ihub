var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];

//1
"use strict";

var list = document.getElementById("app");

for (var i = 0; i < todos.length; i++)  {
var li = document.createElement("li")
li.appendChild(document.createTextNode(todos[i]));	
li.id = "li" + i;
list.appendChild(li);
};


//2
var li0Strike = false;
var li1Strike = false;
var li2Strike = false;

function doStart(){
			document.getElementById("li0").innerHTML = "<a>Get test exercise</a>"; 
	    	document.getElementById("li1").innerHTML = "<a>Write code</a>";
	    	document.getElementById("li2").innerHTML = "<a>Pass test</a>"; 	 
	    	li0Strike = li1Strike = li2Strike = false;  	
}


function doLi0() {
	if (li0Strike == false) {
    	document.getElementById("li0").innerHTML = "<strike>Get test exercise</strike>"; 
    	document.getElementById("li1").innerHTML = "<a>Write code</a>";
    	document.getElementById("li2").innerHTML = "<a>Pass test</a>"; 
    	li0Strike = true;    
    	li1Strike = false; 
    	li2Strike = false; 	
	}
	else{	
		if (li0Strike == true) {
			doStart();
		}	    	    			
	}
}

document.getElementById("li0").onclick = doLi0



function doLi1() {
	//doStart();
	//li1Strike = true;
	if (li1Strike == false) {
		document.getElementById("li0").innerHTML = "<a>Get test exercise</a>"; 
    	document.getElementById("li1").innerHTML = "<strike>Write code</strike>";
    	document.getElementById("li2").innerHTML = "<a>Pass test</a>";
    	li1Strike = true;   
    	li0Strike = false; 
    	li2Strike = false; 	
	}
	else{		
	    if (li1Strike == true) {
			doStart();	
		}
	}
}

document.getElementById("li1").onclick = doLi1



function doLi2() {
	if (li2Strike == false) {
		document.getElementById("li0").innerHTML = "<a>Get test exercise</a>"; 
    	document.getElementById("li1").innerHTML = "<a>Write code</a>";
    	document.getElementById("li2").innerHTML = "<strike>Pass test</strike>";
    	li2Strike = true;  
    	li0Strike = false; 
    	li1Strike = false;  	
	}
	else{		
	    if (li2Strike == true) {
			doStart();	    	
	    }		
	}    
}

document.getElementById("li2").onclick = doLi2

// На моём localhost Ваш код не запустился
