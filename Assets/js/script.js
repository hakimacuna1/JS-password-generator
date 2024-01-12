// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthInput = document.querySelector("#length");
var lengthValue = document.querySelector("#lengthValue");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Update length value display as the range input changes
lengthInput.addEventListener("input", updateLengthValue);

// Function to update the displayed length value
function updateLengthValue() {
  lengthValue.textContent = lengthInput.value;
}

// Function to generate password based on user preferences
function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?/";

  var charSet = lowercaseChars;
  if (document.querySelector("#uppercase").checked) charSet += uppercaseChars;
  if (document.querySelector("#numeric").checked) charSet += numericChars;
  if (document.querySelector("#specialChars").checked) charSet += specialChars;

  var passwordLength = parseInt(document.querySelector("#length").value, 10);

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  return password;
}


// Function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Initialize length value display
updateLengthValue();
