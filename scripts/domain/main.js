

























































function formValidate() {
	const emailField = document.forms["contact"]["emailfield"].value;
	const phoneField = document.forms["contact"]["phonefield"].value;
	const nameField = document.forms["contact"]["namefield"].value;
	const surnameField = document.forms["contact"]["surnamefield"].value;
	const messageField = document.forms["contact"]["messagefield"].value;

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