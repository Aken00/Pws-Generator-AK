// Assignment code here

// Variables and their Arrays
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var sym = ["!","@","#","$","%","^","&","*","?","_","+","=","[","]","{","}",";",":","~",",",".","/","<",">"];

// Declaring Variables
var confirmLength = "";
var chooselower;
var chooseupper;
var choosenum;
var choosesym;

// to do uncap variables

// Alert instructions for the user to begin
window.alert('Welcome! Please click "Generate password" to begin')

// Prompt to confirm how many characters the would like for their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to have?"));

    // Loop if answer is outside parameters
    while (confirmLength <= 7 || confirmLength >= 129) {
        alert('Password length must be between 8-128 character. Try again.');
        var confirmLength = (prompt('How many characters would you like your password to have?'));
    } 
      
  // Determining parameters of password 
  var chooselower = confirm('Click OK if you would like to include lowercase characters.');
  var chooseupper = confirm('Click OK if you would like to include Uppercase characters.');
  var choosenum = confirm('Click OK if you would like to include numbers.');
  var choosesym = confirm('Click OK if you would like to include special symbols.');
      // // Loop if answer is outside the parameters 
      while
      (chooselower === false && 
      chooseupper === false && 
      choosenum === false && 
      choosesym == false) {
      alert('At least one character type must be chossen');
      }

  // Assigning action to the password after length is confirmed
  var passwordChar = []

      if (chooselower) {
        passwordChar = passwordChar.concat(lower)
      }
      if (chooseupper) {
        passwordChar = passwordChar.concat(upper)
      }
      if (choosenum) {
        passwordChar = passwordChar.concat(num)
      }
      if (choosesym) {
        passwordChar = passwordChar.concat(sym)
      }

      // console.log(passwordChar)
    

      // Filling empty string based on for loop generating random character from array
      var randomPassword = ""
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.addEventListener.click

  passwordText.value = password;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


