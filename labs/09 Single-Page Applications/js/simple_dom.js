console.log('page loaded');

console.log(document);

document.getElementById('save').onclick = function () {
save();
};

document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
	document.querySelector('#summary h2').innerHTML = email;
};
	document.querySelector('#userForm input[type="text"]').onkeypress = function() {
	var name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;
	document.querySelector('#summary p1').innerHTML = name;
};

document.querySelector('#userForm input[type="password"]').onkeypress = function() {
	var pass = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary h3').innerHTML = pass;
	document.querySelector('#summary p2').innerHTML = pass;
};
function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);

	document.querySelector('#summary h1').innerHTML = name.value;
	document.querySelector('#summary p1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);

	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');

	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary h2').innerHTML = email;
	document.querySelector('#summary p2').innerHTML = email;

	var pass = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary h3').innerHTML = pass;
	document.querySelector('#summary p').innerHTML = pass;

	paragraphs[1].innerHTML = 'Hello World!';

}