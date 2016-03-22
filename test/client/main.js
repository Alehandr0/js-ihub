//  window.onload=start;
document.addEventListener("DOMContentLoaded", start);
var todos = [
  'Get test exercise',
  'Write code',
  'Pass test',
  'Any text'
];
function start()
  {
    var x = "";
    for ( i = 0; i <= todos.length; x += "<li id=" +i+ " onclick='p(" +i+ ")'>" +todos[i]+ "</li>", i++)
    document.getElementById("app").innerHTML = x;
}
function p(n)
  {
    var	p = document.getElementById(n).innerHTML,
       f1 = "document.getElementById(n).style.textDecoration=",
       f2 = "document.getElementById(n).innerHTML=todos[n]";
    p == todos[n] ? p=f1+"'line-through';"+f2+"+' '" : p=f1+"'none';"+f2;
    eval(p);
}
