// declare variables
var password = " "
var passwordLength = (8-128)
const characters = ""

// Assignment Code connected to the html button id="generate"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // add place for different characters to be chosen        // var characters = "!@#123alpha ";
  //var passwordLength = 12;
  //var password = " ";
  
  var passwordText = document.querySelector("#password");

//for (var i = 0; i <= passwordLength; i++) {        var randomNumber = Math.floor(Math.random()* characters.length);         password+= character.substring(randomNumber,randomNumber + 1); }

  passwordText.value = password;

}

// Add event listener to generate button, my button variable
generateBtn.addEventListener("click", writePassword);
  let char


function getElementByClass(btn); {
  prompt
}

// variables of letters
// variables of numbers
// variables symbols


// make the screen info responsive
