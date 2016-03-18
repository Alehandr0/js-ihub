var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];
var app = document.getElementById('app');
function createTodo(str){
    var todoElem = document.createElement('li');
    todoElem.innerHTML = str;
    app.appendChild(todoElem);
}
for (var i = 0; i < todos.length; i++) {
    createTodo(todos[i]);
}
app.onclick = function(e){
    var target = e.target;
    target.classList.toggle('done');
}
