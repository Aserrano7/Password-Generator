// Assignment code here
var charLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charSpecial = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var choiceLength = window.prompt("Enter how long you want your password to be from 8-128 characters");
  if (!choiceLength || choiceLength <8 || choiceLength >128) {
    var warning = window.alert("Please choose a number between 8-128 characters long");
    return;
  }else if(isNaN(parseInt(choiceLength)) ){
    var needsNum= window.alert("Needs to be a number");
    return;
  
  }
  var choiceLowercase = confirm("Press OK or Cancel if you want your password to have lowercase");
  if (choiceLowercase === false) {
    charLowercase = [""];
  }
  console.log(charLowercase);

  var choiceUppercase = confirm("Press OK or Cancel if you want your password to have Uppercase");
  if (choiceUppercase === false) {
    charUppercase = [""];
  }
  console.log(charUppercase);

  var choiceSpecial = confirm("Press OK or Cancel if you want you password to have Specail Characters")
  if (choiceSpecial === false) {
    charSpecial = [""];
  }
  console.log(charSpecial);

  var index = Math.floor(Math.random() * charLowercase.length);
  var computerLowercase = charLowercase[index];

  var index2 = Math.floor(Math.random() * charUppercase.length);
  var computerUppercase = charUppercase[index2];

  
  var index3 = Math.floor(Math.random() * charSpecial.length);
  var computerSpecial = charSpecial[index3];
  
  var index4 = Math.floor(Math.random() * charNum.length);
  var computerNum = charNum[index4];

console.log(computerLowercase);
console.log(computerUppercase);
console.log(computerSpecial);
console.log(computerNum);

}







/*  var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password; */



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
