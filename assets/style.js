
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];

  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  function getpasswordChoices() {
    var length = parseInt(
      prompt('How many characters would you like in your password?')
    );
  
  if (isNaN(length) === true) {
    alert('Password length must be a number greater than 8.');
    return;
  }
  
  if (length > 128) {
    alert('Password length must be less than 128 characters.');
    return;
  }

  if (length < 8) {
    alert('Password must be at least 8 characters.');
      return;
  }
  
  var hasLowercase = confirm(
    'OK to confirm including lower case letters.'
  );
  
  var hasUppercase = confirm(
    'OK to confirm including upper case characters.'
  );

  var hasSymbols = confirm(
    'OK to confirm including special characters.'
  );
  
  var hasNumbers = confirm(
    'OK to include numbers.'
  );
  
  if (
    hasLowercase === false &&
    hasNumbers === false &&
    hasUppercase === false &&
    hasSymbols === false
   ) {
    alert('You must make a character selection.');
      return;
  }
  
  var passwordChoices = {
    length: length,
    hasSymbols: hasSymbols,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumbers: hasNumbers
  };
  
  return passwordChoices;
  }
  
  function getVariables(arr) {
    var variableArray = Math.floor(Math.random() * arr.length);
    var arrayIndex = arr[variableArray];
  
    return arrayIndex;
  }
  
  function createPassword() {
    var options = getpasswordChoices();
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    var result = [];

  
    if (options.hasSymbols) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getVariables(specialCharacters));
    }
  
    if (options.hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getVariables(numericCharacters));
    }
  
    if (options.hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getVariables(lowerCaseCharacters));
    }
  
    if (options.hasUppercase) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getVariables(upperCaseCharacters));
    }
  
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      var possibleCharacters = getVariables(possibleCharacters);
  
      result.push(possibleCharacters);
    }
  
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
  
    return result.join('');
  }
  
  var generateBtn = document.querySelector('#generate');
  
  function writePassword() {
    var password = createPassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  generateBtn.addEventListener('click', writePassword);
  
  