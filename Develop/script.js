// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var charLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charSpecial = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  var choiceLength = window.prompt("Enter how long you want your password to be from 8-128 characters");
  if (!choiceLength || choiceLength < 8 || choiceLength > 128) {
    var warning = window.alert("Please choose a number between 8-128 characters long.");
    return;
  } else if (isNaN(parseInt(choiceLength))) {
    var needsNum = window.alert("Needs to be a number.");
    return;
  }
  var choiceLowercase = confirm("Press OK or Cancel if you want your password to have lowercase.");
  var choiceUppercase = confirm("Press OK or Cancel if you want your password to have Uppercase.");
  var choiceNum = confirm("Press OK or Cancel if you want your password to have Numbers.");
  var choiceSpecial = confirm("Press OK or Cancel if you want you password to have Specaill Characters.");
  if (choiceLowercase === false && choiceUppercase === false && choiceNum === false && choiceSpecial === false) {
    var needToChooseOne = window.alert('You must choose atleast one');
    return;
  }
var tempCharLowercase = charLowercase;
var tempCharUppercase = charUppercase;
var tempCharNum = charNum;
var tempCharSpecial = charSpecial;

  if (choiceLowercase === false) {
    charLowercase = [];
  }
  if (choiceUppercase === false) {
    charUppercase = [];
  }
  if (choiceNum === false) {
    charNum = [];
  }
  if (choiceSpecial === false) {
    charSpecial = [];
  }
  var allArrays = [];
  let i = 0;
  do {
    if (charLowercase.length > 0) {
      var index = Math.floor(Math.random() * tempCharLowercase.length);
      var computerLowercase = tempCharLowercase[index];
      allArrays.push(computerLowercase);
      i++;
    }

    if (charUppercase.length > 0) {
      var index2 = Math.floor(Math.random() * tempCharUppercase.length);
      var computerUppercase = tempCharUppercase[index2];
      allArrays.push(computerUppercase);
      i++;
    }
    if (charNum.length > 0) {
      var index3 = Math.floor(Math.random() * tempCharNum.length);
      var computerNum = tempCharNum[index3];
      allArrays.push(computerNum);
      i++;
    }
    if (charSpecial.length > 0) {
      var index4 = Math.floor(Math.random() * tempCharSpecial.length);
      var computerSpecial = tempCharSpecial[index4];
      allArrays.push(computerSpecial);
      i++;
    }
  }
  while (i < choiceLength);
  let result = allArrays.join("");
  console.log(result);
  return result;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
