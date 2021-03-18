
var generateBtn = document.querySelector('#generate')
var specialCharArray = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  function generatePassword() {
    var passwordLength = window.prompt('Choose between 8 & 128 characters.'
    )
    if (passwordLength<8||passwordLength>128) {
      alert("Please enter a valid password length.");
      return "";
    }
    var lowerCase = window.confirm('Would you like lowercase letters?');
    var upperCase = window.confirm('Would you like uppercase letters?');
    var specialChar = window.confirm('Would you like any symbols?');
    var randNum = window.confirm('Would you like any numbers?');

    
    var passwordArray = []
  let charCodes = [];
  if (lowerCase) {
    charCodes = charCodes.concat(lowerCasedChar);
  }
  if (upperCase) {
    charCodes = charCodes.concat(upperCasedChar);
  }
  if (specialChar) {
    charCodes = charCodes.concat(specialCharArray);
  }
  if (randNum) {
    charCodes = charCodes.concat(numericChar);
  }
  if (charCodes.length === 0) {
    alert("Please choose at least one set of characters");
    return ""
  }
  console.log(charCodes)

  for (var i = 0; i < passwordLength; i++) {
    var rindex = Math.floor(Math.random() * charCodes.length);
    var characterCode = charCodes[rindex];
    
    passwordArray.push(characterCode)
  }

  console.log(passwordArray)
  return passwordArray.join('');
}



  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);

  
  