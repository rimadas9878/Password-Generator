const generateBtn = generate.addEventListener("click", getPassword)
//const generateBtn = document.querySelector("#generate");

const passwordParameters = {
  lowerChar: "abcdefghijklmnopqrstuvwxyz",
  upperChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  specialcharters: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}",
  passwordNew: " ",
}

var length = {
  minpasswordLength: 8,
  maxpasswordLength: 128,
}

// animesh 12
// at least 1 upper case char - yes
// at least 1 special char - yes
// at least 1 lower case char - no (vartikas answer here is yes)
// at least 1 digit - no (vartikas answer here is yes)

// rima answer : 
// K#*^%$^()SSF
// K*abd2313sg4
// above are valid for animesh


function getPassword() {

  var passwordLength = window.prompt("Select password length between 8 to 128")
  if (passwordLength == null) {
    alert("Stop generating password");
    return false;
  }
  else if (passwordLength < length.minpasswordLength || passwordLength > length.maxpasswordLength) {
    alert("The number of character is less that 8 or greater than 128")
  }
  else {
    console.log(passwordLength);
  }

  var lowercase = window.confirm("Do you want to include atleast 1 lowercase?")
  if (lowercase == true) {

    console.log(passwordParameters.lowerChar);
 
  }

  var uppercase = window.confirm("Do you want to include atleast 1 uppercase?")
  if (uppercase == true) {

    console.log(passwordParameters.upperChar)
  }

  var numeric = window.confirm("Do you want to include atleast 1 numbers?")
  if (numeric == true) {

    console.log(passwordParameters.number)
  }

  var specialchars = window.confirm("Do you want to include atleast 1 special Character?")
  if (specialchars == true) {

    console.log(passwordParameters.specialcharters)
  }


}

function passwordGeneration() {
{
  for(var i = 0; i<=getPassword.passwordLength; i++)
  {
    var randomNumber = Math.floor(Math.random() * passwordParameters.length);
    passwordNew += passwordParameters.substring(randomNumber, randomNumber +1);
    document.getElementById("password").value = passwordNew;
  }
  }
}

function writePassword() {
  var password = getPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



