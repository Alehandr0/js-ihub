var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];

var list = document.getElementById('app');
//Adding elements to 'app' from todos
for (var i=0; i < todos.length; i++) {
    li = document.createElement('li');
    li.innerHTML = todos[i];
    li.style.textDecoration='none';
    list.appendChild(li);
}

var listing;
listing = document.getElementById("app").getElementsByTagName('li');
for (i=0; i<todos.length; i++) { 
//iterate through all the elements of the list
    
    listing[i].onclick = function(event){
        console.log(event);
        var elementLi = event.target;

//Changing the property of the clicked element        
        if (elementLi.style.textDecoration == 'none') {
            elementLi.style.textDecoration = 'line-through';
        } else {
            elementLi.style.textDecoration = 'none';
        }
        
    };
} 

// На моём localhost Ваш код не запустился
