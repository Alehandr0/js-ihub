var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];

var app = document.getElementById('app');

todos.forEach(function(todo) {
  var elem = document.createElement('li');
  elem.innerHTML = todo;
  app.appendChild(elem);
});

app.onclick = function(e) {
  var target = e.target;
  target.classList.toggle('clicked');
};

// На моём localhost Ваш код не запустился
