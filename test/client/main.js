var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];

var i;
var ul_elem = document.getElementById("app");
var li_elem;

function fillpage() {
	for (i = 0; i < todos.length; i++) {
  		li_elem = document.createElement("li");
  		li_elem.id = "elem"+i;
  		li_elem.appendChild(document.createTextNode(todos[i]));
  		ul_elem.appendChild(li_elem);
  		li_elem.style.textDecoration = "none";
/*    li_elem.onclick= function() {
        if(li_elem.style.getPropertyValue("text-decoration")=="line-through") {
        li_elem.style.setProperty("text-decoration", "none");
      }
      else {li_elem.style.setProperty("text-decoration", "line-through"); }
}*/
      if(li_elem.id=="elem0") {li_elem.onclick=text_deco0;}
      if(li_elem.id=="elem1") {li_elem.onclick=text_deco1;}
      if(li_elem.id=="elem2") {li_elem.onclick=text_deco2;}
	}
}

function text_deco0(){
/*var elem_name;
  
  for(i = 0; i < todos.length; i++) {
    elem_name = "elem"+i;
  ele = document.getElementById(elem_name);
  }*/
  var ele = document.getElementById("elem0");
  if(ele.style.getPropertyValue("text-decoration")=="line-through") {
    ele.style.setProperty("text-decoration", "none");
  }
  else {ele.style.setProperty("text-decoration", "line-through"); }
}

function text_deco1(){
  var ele = document.getElementById("elem1");
  if(ele.style.getPropertyValue("text-decoration")=="line-through") {
    ele.style.setProperty("text-decoration", "none");
  }
  else {ele.style.setProperty("text-decoration", "line-through"); }
}
function text_deco2(){
  var ele = document.getElementById("elem2");
  if(ele.style.getPropertyValue("text-decoration")=="line-through") {
    ele.style.setProperty("text-decoration", "none");
  }
  else {ele.style.setProperty("text-decoration", "line-through"); }
}


fillpage();

// На моём localhost Ваш код не запустился
