var todos = [
  'Get test exercise',
  'Write code',
  'Pass test'
];
function start()
  {
    var x = "";
    for ( i = 0; i <= todos.length; x += "<li id=" +i+ " onclick='per(" +i+ ")'>" +todos[i]+ "</li>", i++)
    document.getElementById("app").innerHTML = x;
}
function per(n)
  {
    var p = document.getElementById(n).innerHTML,
        f1 = "document.getElementById(n).style.textDecoration=",
        f2 = "document.getElementById(n).innerHTML=todos[n]";
    if(p==todos[n])
      {
        f1 += "'line-through'";
        eval(f1);
        f2 += "+' '";
        eval(f2);
      }
      else
      {
        f1 += "'none'";
        eval(f1);
        eval(f2);
    }
}
