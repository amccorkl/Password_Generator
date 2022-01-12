
// Code connects to the html button #generate
var generateBtn = document.querySelector("#generate");
// var copyToClipBoardBtn = document.querySelector("#copy");

//define variables 
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPEQRSTUVWXYZ".split("");
var specialChar = "!@#$%^&*()_+=-{}][|:;?/>.<,".split("");
var numbers = "1234567890".split("");
var allCharacters = [];
var returnPassword = "";



function generatePassword() {     
  //length condition first
  var passwordLength = prompt("How many characters do you want your password to be? \nIt must be between 8 and 128 characters.");

 
  //check if password length conditions met
  if((passwordLength < 8) || (passwordLength > 128)) {
    alert("Reminder: your password must be between 8 and 128 characters. Please reenter your character length by clicking on 'Generate Password' again."); 
    return;

    //undefined returned when user enters nothing 
  }

    //loop asks user to confirm choices  ????? doesn't work, user can still click cancel and it progresses
    var askLowerCase = confirm("Click ok to confirm using lower case letters in your password. 'Generator' will not work if you don't click ok.");
      if (lowerCase) {
        allCharacters += lowerCase
      }
          
    var askUpperCase = confirm("Click ok to confirm using upper case letters in your password"); 
      if (upperCase) {
        allCharacters += upperCase
      }
    
    var askNumbers = confirm("Click ok to confirm using numbers in your password");
      if (numbers) {
        allCharacters += numbers
      }
    
    var askSpecialChar = confirm("Click ok to confirm using special characters in your password");
      if (specialChar) {
        allCharacters += specialChar
      }
       
  // didn't work
      if (!lowerCase && !upperCase && !numbers && !specialChar) {
        return alert("please select ok for each criteria option");
      }
   
console.log(allCharacters);

// run the loop that pulls all required letters, numbers, symbols until the length is reached
  for (var i = 0; i < passwordLength; i++) {
    returnPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  console.log("return password:", returnPassword);

  return returnPassword; 
}

  

// Write the text into the textarea
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// add event listener to generate button, with local variables 
generateBtn.addEventListener("click", writePassword);






// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCase = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "{", "}", "[", "]", "|", ":", "<", ">", ",", ".", "?", "/"];
// var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];