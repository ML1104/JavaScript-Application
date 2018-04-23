'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');
console.log(readValue);

agCookie.erase('example-cookie');
'use strict';

console.log('I have entered this file.');
console.log('This is crystal clear evidence that this works.');

var calculation = 200 + 223;

console.log('Sanity Check: 200 + 223 = ' + calculation);
console.log('bye.');
"use strict";

var request = new XMLHttpRequest();

var url = "https://api.myjson.com/bins/m64xv?pretty=1";

request.open("GET", url);

request.type = "json";

request.send();

request.onload = function () {
	var jsonObject = JSON.parse(request.response);
	console.log(jsonObject);
	document.getElementById("review-holder").innerHTML = jsonObject.reviews[0];
};

var lightbox1 = document.getElementById("lightbox1");
var closebutton1 = document.getElementById("closebutton1");
var gameReview = document.getElementById("game_review");

gameReview.addEventListener("click", function () {
	lightbox1.classList.remove("invisible");
});

closebutton1.addEventListener("click", function () {
	lightbox1.classList.add("invisible");
});

var lightbox2 = document.getElementById("lightbox2");
var closebutton2 = document.getElementById("closebutton2");
var aboutGame = document.getElementById("about_game");

aboutGame.addEventListener("click", function () {
	lightbox2.classList.remove("invisible");
});

closebutton2.addEventListener("click", function () {
	lightbox2.classList.add("invisible");
});

function formValidate() {
	var emailField = document.forms["contact"]["emailfield"].value;
	var phoneField = document.forms["contact"]["phonefield"].value;
	var nameField = document.forms["contact"]["namefield"].value;
	var surnameField = document.forms["contact"]["surnamefield"].value;
	var messageField = document.forms["contact"]["messagefield"].value;

	if (emailField == "" || emailField == null) {
		alert("Email must be filled out");
		return false;
	}

	if (isNaN(phoneField)) {
		alert("Only numbers allowed in phone field");
		return false;
	}

	if (nameField == "" || nameField == null) {
		alert("Name must be filled out");
		return false;
	}

	if (!isNaN(nameField)) {
		alert("Name cannot contain numbers");
		return false;
	}

	if (surnameField == "" || surnameField == null) {
		alert("Surname must be filled out");
		return false;
	}

	if (!isNaN(surnameField)) {
		alert("Surname cannot contain numbers");
		return false;
	}

	if (messageField == "" || messageField == null) {
		alert("Message cannot be empty");
		return false;
	} else {
		document.getElementById("submitForm").submit();
	}
}