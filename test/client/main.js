(function () {
  var toDoList = [
  'Get test exercise',
  'Write code',
  'Pass test'
];

  toDoList.forEach(function(agenda) {

    var todoListItem = document.createElement('li'),
        node = document.createTextNode(agenda);

    todoListItem.appendChild(node);
    app.appendChild(todoListItem);

  });

  app.onclick = todoChangeState;

  function todoChangeState(event) {
    var element = event.target;
    if (element.tagName == 'LI') {
      if (element.style.textDecoration.length) {
        element.style.textDecoration = ''
      } 
      else {
        element.style.textDecoration = 'line-through';
      }
    }
  }
}) ();

// На моём localhost Ваш код не запустился
