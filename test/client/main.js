/* 	name 	- текст, выводимый на экран в списке
	waiting - призна ожидания подтверждения от сервера
	done 	- подтверждение получено, текст зачеркиваем*/
var todos = [ 
   {'name':'Get test exercise', 'waiting':false, 'done':false}, 
   {'name':'Write code', 'waiting':false, 'done':false}, 
   {'name':'Pass test', 'waiting':false, 'done':false} 
 ];

// Установка связи элемента DOM с данными
var appMap = new Map();
appMap.set('app', todos); 

// Начальное заполнение массива объектами, которые нужно отобразить в браузере.
var objectsToRender = [{'id':'app', 'inner':todos}];


// Описание события нажатия кнопки на элементе списка.
function liListener(event) {
	target = event.target;
	var parrent = target.parentNode;
	var children = parrent.childNodes;
	var indChild = 0;

	for (var i = 0; i < children.length; i++) {
		if (target == children[i]) {indChild = i; break;}
	}
	
	params = {'id':parrent.getAttribute('id'), 'nodeName':parrent.nodeName, 'childNom':indChild};
	requestChangeData(params);
}

// Имитация обращения к серверу.
function requestToServerUl(requestParams) {
	var data = appMap.get(requestParams.id);
	var objectsToRender = [{'id':requestParams.id, 'inner':data}];

	data[requestParams.childNom].waiting = true;
	toRender(objectsToRender);

	request = new Promise( function(resolve, reject) {
		window.setTimeout(function() {resolve('success')},1500);
	});

	request.then(function() {
		data[requestParams.childNom].done = !data[requestParams.childNom].done;
		data[requestParams.childNom].waiting = false;
		toRender(objectsToRender);
		objectsToRender = [];
	});
}

function requestChangeData(requestParams) {
	if (requestParams.nodeName='ul') {
		requestToServerUl(requestParams);
	}
}


// Функции выполняющие рендеринг элементов в браузере.
function toRenderUl(renderElement, renderParam) {
	
	var children = renderElement.childNodes;
	var newLi;
	var newLiView;

	// Remove all child nodes
  	for (var j = children.length - 1; j >= 0; j--) { renderElement.removeChild(children[j]); }

	// Create new child nodes
	for (var j = 0; j < renderParam.inner.length; j++) {
		renderParam.inner[j];

		newLi = document.createElement('li');
		newLi.addEventListener("click", liListener);

		newLi.innerHTML = renderParam.inner[j].name;
	
		textAttr = '';

		if (renderParam.inner[j].waiting==true) textAttr += "background-color: silver; color: grey;";
		if (renderParam.inner[j].done==true) textAttr += "text-decoration:line-through;";

		newLi.setAttribute("style",textAttr);

		renderElement.appendChild(newLi);
	}	
}

function toRender(renderParams=undefined) {
	var element;

	for (var i = 0; i < renderParams.length; i++) {
		
		element = document.getElementById(renderParams[i].id);

		if (element.nodeName = 'ul') toRenderUl(element, renderParams[i]);
	}
}

// Начальное отображение элементов на экране.
toRender(objectsToRender);
objectsToRender = [];

