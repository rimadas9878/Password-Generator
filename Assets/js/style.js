//Initializing the passwordLength variable
var passwordLength = 0;
//Initializing the array variable inorder to store the concatenated value
var optionSelectArr = [0];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn = addEventListener("click", writePassword)

// This code will display text in the textbox
function writePassword() {
  // Calling the getPromts method
  getPromts();
  var password = getPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//The below function for the prompt messages, to collect the information and store in 'optionSelectArr' variable
function getPromts() {

  var passwordParameters = {
    lowerChar: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperChar: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    specialcharters: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '|', ';', ':', ',', '<', '>'],
    minpasswordLength: 8,
    maxpasswordLength: 128,
  }

  passwordLength = prompt("Select password length between 8 to 128");

  if (passwordLength == null) {

    alert("Stop generating password");
    return false;

  }
  else if (passwordLength < passwordParameters.minpasswordLength || passwordLength > passwordParameters.maxpasswordLength) {
    alert("The number of character is less that 8 or greater than 128");
    return false;

  }
  else {
    console.log(passwordLength);
  }

  var lowercase = confirm("Would you like to include atleast 1 lowercase?");
  if (lowercase == true) {
    //Inital value of optionSelectArr is 0, Once user confirms each questions the value gets stored in optionSelectArr
    //The concat() method creates a new array by merging (concatenating) existing arrays   
    console.log(passwordParameters.lowerChar);
    optionSelectArr = optionSelectArr.concat(passwordParameters.lowerChar);

  }

  var uppercase = confirm("Would you like to include atleast 1 uppercase?");
  if (uppercase == true) {

    console.log(passwordParameters.upperChar);
    optionSelectArr = optionSelectArr.concat(passwordParameters.upperChar);
  }

  var numeric = confirm("Would you like to include atleast 1 numbers?");
  if (numeric == true) {

    console.log(passwordParameters.number);
    optionSelectArr = optionSelectArr.concat(passwordParameters.number);
  }
  // After this confirmation we have the an array of elements with lower char, upper char, num and special char
  var specialchars = window.confirm("Would you like to include atleast 1 special Character?");
  if (specialchars == true) {

    console.log(passwordParameters.specialcharters);
    optionSelectArr = optionSelectArr.concat(passwordParameters.specialcharters);
  }
  return true;
}

//This is the function where we use the Math.ramdom() to get the random numbers stored in optionSelectArr
function getPassword() {
  password = " ";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = (Math.floor(Math.random() * optionSelectArr.length));
    //The inital value in password is 0
    // This line will get a random number and store it in password, each time the loop is run
    password = password + optionSelectArr[randomNumber];
    // this line is just to check the added elements in console
    console.log(password)
  }
  return password;
}

