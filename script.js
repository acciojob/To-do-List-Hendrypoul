var list = document.querySelector('ol');
var data=document.querySelector('input');

function addItem(){
if(data.value.trim().length !== 0){
	var li = document.createElement("li");
	const textnode=document.createTextNode(data.value);
	li.appendChild(textnode);
	list.appendChild(li);
	data.value="";
}
}
