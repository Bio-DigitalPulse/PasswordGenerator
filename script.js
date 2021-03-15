const passResult = document.getElementById('#password');
var generateBtn = document.querySelector("#generate");

const randFunctions = {
  symbol: getRandSymbol,
  lower: getRandLow,
  numbers: getRandNumber,
  upper: getRandUp,
};



// Write password to the #password input
function writePassword() {
  var password = variableFunctions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Character Selector Arrays

function PasswordResults() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  if (length < 8) {
  alert('Password length must be more than 7 characters');
  return;
}

if (length > 128) {
  alert('Password length must be less than 129 characters');
  return;
}}

var hasRandSymbol = confirm(
  'Click OK to confirm including special characters'
);

var hasRandNumber = confirm(
  'Click OK to confirm including numbers'
);

var hasRandUp = confirm(
  'Click OK to confirm including uppercase letters'
);

var hasRandLow = confirm(
  'Click OK to confirm including lowercase letters'
);

if (
  hasRandSymbol === false &&
  hasRandNumber === false &&
  hasRandUp === false &&
  hasRandLow === false 
) {
  alert('Must select character types');
  return;
}


function getRandLow() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandUp() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

generateBtn.addEventListener("click", writePassword); {}

generate.addEventListener('click', () => {
	const length = parseInt.value;
	const hasRandLow = getRandLow.confirmed;
	const hasRandUp = getRandUp.confirmed;
	const hasRandNumber = getRandNumber.confirmed;
	const hasRandSymbol = getRandSymbol.confirmed;
	
	passResult.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});