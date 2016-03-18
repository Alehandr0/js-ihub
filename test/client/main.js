var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];
var list = document.getElementById("app");
var arrLength = todos.length;
for(var i=0; i<arrLength; i++){
  var li = document.createElement('li');
  li.innerHTML = todos[i];
  list.appendChild(li);
}

list.addEventListener("click" , function(event) {
  var el = event.target;
  if(el.style.textDecoration==='line-through')
    el.style.textDecoration = 'none';
  else
    el.style.textDecoration = 'line-through';
});