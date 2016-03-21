var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];

var list = document.getElementById('app');

for (var i=0; i < todos.length; i++) {
    li = document.createElement('li');
    li.innerHTML = todos[i];
    li.style.textDecoration='none';
    list.appendChild(li);
}

var listing;
listing = document.getElementById("app").getElementsByTagName('li');
for (i=0; i<todos.length; i++) {
    
    listing[i].onclick = function(event){
        console.log(event);
        var elementLi = event.target;
        
        if (elementLi.style.textDecoration == 'none') {
            elementLi.style.textDecoration = 'line-through';
        } else {
            elementLi.style.textDecoration = 'none';
        }
        
    };
} 


