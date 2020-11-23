//Registration form
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstname = document.getElementById('firstname');
const middlename = document.getElementById('middlename');
const lastname = document.getElementById('lastname');
const company = document.getElementById('company');

form.onsubmit=submit

function submit (event) {
	checkInputs();
	event.preventDefault();
};

function checkInputs() {
	document.getElementById('error').innerText = '';
	var goodInput = true;
	var usernameValue = username.value.trim(); //trim removes whitespaces input by the user
	var passwordValue = password.value.trim();
	var password2Value = password2.value.trim();
	var firstnameValue = lastname.value.trim();
	var lastnameValue = lastname.value.trim();
	var companyValue = company.value;

	if(usernameValue === '') {
		setErrorFor('Username cannot be blank');
		goodInput=false;
	}	else if (!validUsername(usernameValue)) {
			setErrorFor('Username must not exceed 8 characters');
	} 
    
    if(passwordValue === '') {
		setErrorFor('Password cannot be blank');
		goodInput=false;
	}	else if (!validPassword(passwordValue)) {
			setErrorFor('Password must not exceed 8 characters, and comprise a digit, a lowercase letter, and an uppercase letter');
	}
    
    if(password2Value === '') {
		setErrorFor('Password2 cannot be blank');
		goodInput=false;
	} else if(passwordValue !== password2Value) {
			setErrorFor('Passwords do not match');
		goodInput=false;
	}

	if(firstnameValue === '') {
		setErrorFor('First Name cannot be blank');
		 goodInput=false;
	 }

     if(lastnameValue === '') {
		setErrorFor('Last Name cannot be blank');
		 goodInput=false;
	 }

     if(companyValue === '') {
		 setErrorFor('Company cannot be blank');
		 goodInput=false;
	 } 
		
	if(goodInput){
		document.getElementById('error').innerText = 'Successfully registered!';
	}

	
}

function setErrorFor(message) {
	var error = document.getElementById('error');
	var errorMessage = message+'\n' //enters the message and then leaves a space
	error.innerText += errorMessage; //+= allows for multiple error messages
}

function validUsername(username) {
	return /^[a-zA-Z0-9]{1,8}$/.test(username);
}

function validPassword(password) {
	return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{1,8}$/.test(password);
}

function isNumber(number) {
	return /^\d{10}$/.test(number);
}

//Sign in form
const form2 = document.getElementById('form2');
const usernameTwo = document.getElementById('usernameTwo');
const passwordTwo = document.getElementById('passwordTwo');

form2.onsubmit=submit2

function submit2 (event) {
	checkInputsTwo();
	event.preventDefault();
};

function checkInputsTwo() {
	document.getElementById('errorTwo').innerText = '';
	var goodInputTwo = true;
	var usernameTwoValue = usernameTwo.value.trim();
	var passwordTwoValue = passwordTwo.value.trim();

if (usernameTwoValue === '') {
    setErrorTwoFor('Please enter a username');
		goodInputTwo=false;
}

if(passwordTwoValue === '') {
    setErrorTwoFor('Please enter a password');
    goodInputTwo=false;
}	

if(goodInputTwo){
    document.getElementById('errorTwo').innerText = 'Successfully signed in!';
}
}

function setErrorTwoFor(message) {
	var errorTwo = document.getElementById('errorTwo');
	var errorTwoMessage = message+'\n' //enters the message and then leaves a space
	errorTwo.innerText += errorTwoMessage; //+= allows for multiple error messages
} 


//Home Page geolocation
var geo = document.getElementById("demo");

function getPosition() {
  if (navigation.geolocation) {
    navigation.geolocation.watchPosition(showPosition);
  } else { 
    geo.innerHTML = "Geolocation is not supported by this browser.";
  }
}
      
function showPosition(position) {
  geo.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}