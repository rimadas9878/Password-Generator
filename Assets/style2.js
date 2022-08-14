var passwordLength = 0;
var optionSelectArr = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn = addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {

    getPromts();
    var password = getPassword();
    var passwordText = document.querySelector("#password");  
    passwordText.value = password;
  
  }

function getPromts(){
  
  var passwordParameters = {
    lowerChar: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',],
    upperChar: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',],
    number: ['0','1','2','3','4','5','6','7','8','9',],
    specialcharters: ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','|',';',':',',','<','>'],
    minpasswordLength: 8,
    maxpasswordLength: 128,
    password: '',
  }

  optionSelectArr = [0];

 passwordLength = prompt("Select password length between 8 to 128");

  if (passwordLength == null) {
    
    alert("Stop generating password");
    return false;
    
  }
  else if (passwordLength < passwordParameters.minpasswordLength || passwordLength > passwordParameters.maxpasswordLength) {
    window.alert("The number of character is less that 8 or greater than 128");
    return false;
  
  }
  else {
    console.log(passwordLength);
  }
  
  var lowercase = window.confirm("Would you like to include atleast 1 lowercase?");
  if (lowercase == true) {

    console.log(passwordParameters.lowerChar);
    optionSelectArr = optionSelectArr.concat(passwordParameters.lowerChar);
 
  }

  var uppercase = window.confirm("Would you like to include atleast 1 uppercase?");
  if (uppercase == true) {

    console.log(passwordParameters.upperChar);
    optionSelectArr = optionSelectArr.concat(passwordParameters.upperChar);
  }

  var numeric = window.confirm("Would you like to include atleast 1 numbers?");
  if (numeric == true) {

    console.log(passwordParameters.number);
    optionSelectArr = optionSelectArr.concat(passwordParameters.number);
  }

  var specialchars = window.confirm("Would you like to include atleast 1 special Character?");
  if (specialchars == true) {

    console.log(passwordParameters.specialcharters);
    optionSelectArr = optionSelectArr.concat(passwordParameters.specialcharters);
  }
  return true;
}

function getPassword(){
  password: " ";
  for(var i = 0; i<=passwordLength; i++)
  {
    var randomNumber = Math.floor(Math.random() * optionSelectArr.length);
    password = password + optionSelectArr[randomNumber];
  }
  return password;
}
