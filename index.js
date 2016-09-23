var submit = document.getElementsByClassName('submit')[0]; // submit button
var input = document.getElementsByClassName('form-control')[0]; // message field
var ul = document.getElementsByClassName('message-list')[0];

submit.onclick = function (e) {
	e.preventDefault();
	console.log(input.value)

	var li = document.createElement('li');
	li.innerHTML = input.value;
	ul.appendChild(li);
	input.value = '';
};
