// Assignment code here
var charLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charSpecial = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");


function generatePassword() {
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
  var choiceSpecial = confirm("Press OK or Cancel if you want you password to have Specail Characters.");
  if (choiceLowercase === false && choiceUppercase === false && choiceNum === false && choiceSpecial === false) {
    var needToChooseOne = window.alert('You must choose atleast one');
    return;
  }


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

  console.log(charLowercase);
  console.log(charUppercase);
  console.log(charNum);
  console.log(charSpecial);

  var allArrays = [];
  let i = 0;
  do {
    if (charLowercase.length > 0) {
      var index = Math.floor(Math.random() * charLowercase.length);
      var computerLowercase = charLowercase[index];
      allArrays.push(computerLowercase);
      i++;
    } 

    if (charUppercase.length > 0) {
      var index2 = Math.floor(Math.random() * charUppercase.length);
      var computerUppercase = charUppercase[index2];
      allArrays.push(computerUppercase);
      i++;
    }

    if (charNum.length > 0) {
      var index3 = Math.floor(Math.random() * charNum.length);
      var computerNum = charNum[index3];
      allArrays.push(computerNum);
    i++;
    } 

    if (charSpecial.length > 0) {
      var index4 = Math.floor(Math.random() * charSpecial.length);
      var computerSpecial = charSpecial[index4];
      allArrays.push(computerSpecial);
i++;
    } 
    
  
  }
  
  while (i < choiceLength);
return allArrays.toString();
}
// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password; 

}


/* 
  console.log(allArrays);
  console.log(choiceLength); */
  //this is going to give me the index of the array 
/*   console.log(computerLowercase);
  console.log(computerUppercase);
  console.log(computerNum);
  console.log(computerSpecial);
  
  console.log(choiceLength); */

  /*  for (let index = 0; index < choiceLength.length; index++) {
     var index5= Math.floor(Math.random() * allArrays.length);
   var charArray= allArrays[index];
   console.log(charArray);
   
   } */
  // this is going to show me what the random index value is inside the element 




  //this shows all the element values it choose and put them all in a array 
  /*   var allArrays =[].concat(computerLowercase, computerUppercase, computerNum, computerSpecial);
    console.log(allArrays);
    for (let index = 0; index < choiceLength.length; index++) {
      var index5= Math.floor(Math.random() * allArrays.length);
    var charArray= allArrays[index5];
      var result=[];
      result.push(charArray[index]);
      console.log(result);
    }
   
  
  
    console.log(computerLowercase);
    console.log(computerUppercase);
    console.log(computerNum);
    console.log(computerSpecial);
  
  } */










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
