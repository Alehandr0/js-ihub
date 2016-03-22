(function (){
  var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];
  // render todoItems in todosList
  todos.forEach(function(todo){

    var todoListItem = document.createElement('li'),
        node = document.createTextNode(todo);

    todoListItem.appendChild(node);
    app.appendChild(todoListItem);

  });

  //change todoItem state
  app.onclick = todoChangeState;

  function todoChangeState(event){
    var element = event.target;
    if (element.tagName == 'LI') {
      if (element.style.textDecoration.length) {
        element.style.textDecoration = ''
      } else {
        element.style.textDecoration = 'line-through';
      }
    }
  }

})();

// На моём localhost Ваш код не запустился
