// declare variables
// var password = " "
// var passwordLength = (8-128)
// const characters = ""

// results connected to the html button id="generate"
var generateBtn = document.querySelector("#generate");

// create local variables
function writePassword() {
  
//writes the password to HTML #password
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button, with local variables 
generateBtn.addEventListener("click", writePassword);
  var hasCharSet = characterSet.checked;
  var hasPassLength = passwordLength.value;

  result.innerText = generatePassword(hasCharSet, hasPassLength);


function getElementByClass(btn); {
  prompt
}


   
  //   // Loop through other character conditions beyond length
  //     if (confirm("Your password should also contain upper case letters.")) {
  //       Array.prototype.push.apply(allCharacters, upperCase);
  //     } 
      
  //     if (confirm("Your password should also contain lower case letters.")) {
  //       Array.prototype.push.apply(allCharacters, lowerCase);
  //     }
  
  //     if (confirm("Your password should also contain numbers.")) {
  //       Array.prototype.push.apply(allCharacters, lowerCase);
  //     }  
  //     if (allCharacters.passwordLength===0) {
  //       alert("You must select at least one character to generate the password.\nPlease start over.");
  //     }
      
  
  // }
// //Prompting user for values
// function generatePassword(){
//   let passwordLength = prompt("Your password must be between 8 and 128 characters. How many would you like?");

//   if(passwordLength < 8 || PasswordLength > 128 isNaN(parseInt(passwordLength))) {
//     alert("Remember, your password must be between 8 and 128 characters."); 
//   } else {
//     let lowerCasePassword = confirm("Please use lower case letters.");
//     if(lowerCasePassword){
//       allChar += lowerCase
//     };
//   }

//   }


//write the password
// function writePassword
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;

// // function to copy password to the clipboard; event listener is in index.html file
// function copied() {
//   let passwordText = document.querySelector("passwordText");
//   passwordText.select()
//   document.execCommand("copy");
//   alert("Your new password has been copied to the Clipboard");

// }


// // Length Function to write the password to the #password input
// function passwordLength(){
//   var passwordLength = prompt("Your password must be between 8 and 128 characters. How many would you like?");

//   if(PasswordLength < 8 || PasswordLength > 128) {
//     window.alert("Remember, your password must be between 8 and 128 characters. \nPlease try again.");
//     function passwordLength();
//   }
//   else return passwordLength;
// }


// function generatePassword() {
//   var allCharacters = [];
//   passwordLength();
//   var passwordResult = ""; //empty to allow for the generation

//   // Loop through other character conditions beyond length
//     else if (confirm("Your password should also contain upper case letters.")) {
//     Array.prototype.push.apply(allCharacters, upperCase);
//     } 
    
//     else if (confirm("Your password should also contain lower case letters.")) {
//       Array.prototype.push.apply(allCharacters, lowerCase);
//     }

//     else if (confirm("Your password should also contain numbers.")) {
//       Array.prototype.push.apply(allCharacters, lowerCase);
//   }  

// }

// //write the password
// function writePassword
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;

// // function to copy password to the clipboard; event listener is in index.html file
// function copied() {
//   let passwordText = document.querySelector("passwordText");
//   passwordText.select()
//   document.execCommand("copy");
//   alert("Your new password has been copied to the Clipboard");

// }

// btncopy.addEventListener("click", function () {
//   password.select();
//   document.execCommand("copy");
//   alert("Copied your new Password");
// }



// // declare variables
// var password = " "
// var passwordLength = (8-128)
// const characters = ""

// // Assignment Code connected to the html button id="generate"
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   // add place for different characters to be chosen        // var characters = "!@#123alpha ";
//   //var passwordLength = 12;
//   //var password = " ";
  
//   var passwordText = document.querySelector("#password");

// //for (var i = 0; i <= passwordLength; i++) {        var randomNumber = Math.floor(Math.random()* characters.length);         password+= character.substring(randomNumber,randomNumber + 1); }

//   passwordText.value = password;

// }

// // Add event listener to generate button, my button variable
// generateBtn.addEventListener("click", writePassword);


// make the screen info responsive

