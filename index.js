var submit = document.getElementsByClassName('submit')[0]; // submit button
var input = document.getElementsByClassName('form-control')[0]; // message field


submit.onclick = function () {
	console.log(input.value)
};
var li = document.createElement('li');
