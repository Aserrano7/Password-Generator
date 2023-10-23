
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // create arrays that will hold all the values of each type
  var charLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var charUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var charNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var charSpecial = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  // ask the user how long you want  the array to be and checks if you inputed the right type
  var choiceLength = prompt("Enter how long you want your password to be from 8-128 characters");
  if (!choiceLength || choiceLength < 8 || choiceLength > 128) {
    alert("Please choose a number between 8-128 characters long.");
    return;
  } else if (isNaN(parseInt(choiceLength))) {
    alert("Needs to be a number.");
    return;
  }
  // create the propmt so you can save their choice
  var choiceLowercase = confirm("Press OK or Cancel if you want your password to have lowercase.");
  var choiceUppercase = confirm("Press OK or Cancel if you want your password to have Uppercase.");
  var choiceNum = confirm("Press OK or Cancel if you want your password to have Numbers.");
  var choiceSpecial = confirm("Press OK or Cancel if you want you password to have Special Characters.");
  // checks if at least one has been selected
  if (choiceLowercase === false && choiceUppercase === false && choiceNum === false && choiceSpecial === false) {
    var needToChooseOne = alert('You must choose atleast one');
    return;
  }
  //combines all arrays into one big array if the choice is true 
  var combineArrays = [];
  if (choiceLowercase === true) {
    combineArrays = [].concat(charLowercase);
  }
  if (choiceUppercase === true) {
    combineArrays = combineArrays.concat(charUppercase);
  }

  if (choiceNum === true) {
    combineArrays = combineArrays.concat(charNum);
  }
    if (choiceSpecial === true) {
      combineArrays = combineArrays.concat(charSpecial);

    }
    // created an array to save all the random values we get from the combine arrays and we push them 
    //through to be save on another array called password
    var password = [];
    for (let i = 0; i < choiceLength; i++) {
      var index = Math.floor(Math.random() * combineArrays.length);
      var computerArray = combineArrays[index];
      password.push(computerArray);
    }
    return password.join("");
  }
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
