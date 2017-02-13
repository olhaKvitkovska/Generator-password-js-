

var small_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var big_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var password_length = 8;

function passWord(){
	var interval = setInterval(function(){
document.getElementById('input').value = show() },110);
 setTimeout(function(){clearInterval(interval)},300);
	}
function show() {
	function random_a() {
  	return small_letters[Math.floor(Math.random()*small_letters.length)];
	}

	function random_A() {
 		return big_letters[Math.floor(Math.random()*big_letters.length)];
	}

	function random_1() {
  	return numbers[Math.floor(Math.random()*numbers.length)];
	}

	var password = '';

	for (var i = 0; i < password_length; i++) {
  	var random_sign = [random_a(), random_A(), random_1()];
  	password += random_sign[Math.floor(Math.random()*random_sign.length)]
	}
	return password;
}
button.addEventListener('click', passWord);
