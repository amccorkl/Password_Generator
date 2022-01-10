// declare variables
// var password = " "
// var passwordLength = (8-128)
// const characters = ""

// results connected to the html button id="generate"
var generateBtn = document.querySelector("#generate");

// create local variables
function writePassword() {
  var password = generatePassword();
  var characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz1234567890!@#$%^&*()";
  var passwordLength = (8-128);

  var passwordText = document.querySelector("#password");


//for (var i = 0; i <= passwordLength; i++) {        var randomNumber = Math.floor(Math.random()* characters.length);         password+= character.substring(randomNumber,randomNumber + 1); }

  passwordText.value = password;

}

// Add event listener to generate button, with local variables 
generateBtn.addEventListener("click", writePassword);
  var hasCharSet = characterSet.checked;
  var hasPassLength = passwordLength.checked;


function getElementByClass(btn); {
  prompt
}




// make the screen info responsive

