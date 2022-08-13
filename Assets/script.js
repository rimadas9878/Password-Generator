generate.addEventListener("click", getPassword)
// Assignment Code
function getPassword() {

  var passwordQueries = {
    lowerChar: "abcdefghijklmnopqrstuvwxyz",
    upperChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    specialcharters: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}",
    password: " ",
  }
  var length = {
    minpasswordLength: 8,
    maxpasswordLength: 128,
  }

  var passwordLength = window.prompt("Select password length between 8 to 128")
  console.log(passwordLength)

  if (passwordLength < length.minpasswordLength || passwordLength > length.maxpasswordLength) {
    alert("The number of character is less that 8 or greater than 128")
  }
  else {
    var lowercase = window.confirm("Do you want the password to have include lowercase?")
    if (lowercase == true) {
      console.log(passwordQueries.lowerChar);
    }
    var uppercase = window.confirm("Do you want the password to have include uppercase?")
    if (uppercase == true) {
      console.log(passwordQueries.upperChar)
    }
    var numeric = window.confirm("Do you want the password to have include numbers?")
    if (numeric == true) {
      console.log(passwordQueries.number)
    }
    var specialchars = window.confirm("Do you want the password to have include special Character?")
    if (specialchars == true) {
      console.log(passwordQueries.specialcharters)
    }
    var passwordGeneration = function () {

      for (var i = 0; i <= length.passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * getPassword.length)
      }
      getPassword.passwordGeneration()
      password = password + passwordGeneration().substring(randomNumber, randomNumber + 1);
      console.log(password);
    }

  }
}



