var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];

var list = document.getElementById('app');

var todoApp = {

    showList: function() {
        todos.map(function(item) {
            var el = document.createElement("li");
            el.appendChild(document.createTextNode(item));
            el.onclick = todoApp.toggleDone;
            list.appendChild(el);
        });
    },

    toggleDone: function() {
        var task = this.classList;
        task.contains('done')
            ? task.remove('done')
            : task.add('done');
    }
}

todoApp.showList();

// На моём localhost Ваш код не запустился
