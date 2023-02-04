var list = document.querySelector('ol');
var data=document.querySelector('input');

function addItem(){
if(data.value.trim().length ===0){
	var li = document.createElement("li");
	const textnode=document.createTextNode(data.value);
	li.appendChild(textnode);
	list.appendChild(li);
}
}

// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
// function newElement() {
//   var li = document.createElement("li");
//   var newTodoInput = document.getElementById("newTodoInput").value;
//   var t = document.createTextNode(newTodoInput);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("todoList").appendChild(li);
//   }
//   document.getElementById("newTodoInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }