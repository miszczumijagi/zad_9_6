
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click' , function(element) {
	var element = document.createElement('li');
  	
  	var listByTagName = document.getElementsByTagName('li');
	var numberOfListElements = listByTagName.length;
	
	element.innerHTML = 'item' + numberOfListElements;
	
	list.appendChild(element);
});



