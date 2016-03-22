var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];

putLiInUl(document.getElementById("app"),todos);

function createLi(text){
  var newLi = document.createElement('li');
  newLi.className = 'my-li';
  newLi.onclick=function(){
    if (this.style.textDecoration == 'line-through')
      this.style.textDecoration = 'none';
    else this.style.textDecoration = 'line-through';
  };
  newLi.style.backgroundColor = 'yeallow';
  newLi.innerHTML = text;
  return newLi;
}

function putLiInUl(ul,arrayText){
  arrayText.forEach(function(itemText){
    ul.appendChild(createLi(itemText));
  })
}

// На моём localhost Ваш код не запустился
