
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click' , function(element) {
	var element = document.createElement('li');
  	
  	var listByTagName = document.getElementsByTagName('li');
	var numberOfListElements = listByTagName.length;
	
	for (i = 0 ; i <= numberOfListElements ; i++) {
		element.innerHTML = 'item ' + [i];
	}
	
	list.appendChild(element);
	});



