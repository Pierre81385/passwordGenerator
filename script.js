// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = "";
var lowerCaseChoice = false;
var upperCaseChoice = false;
var numericChoice = false;
var specialChar = false;
var passwordLength = 0;
var characters = "";

function getUserInput() {
  passwordLength = prompt("How long does your password need to be?");

  if (passwordLength < 8) {
    alert("The password must be at least 8 characters long.");
    passwordLength = prompt("How long does your password need to be?");
  } else if (passwordLength > 128) {
    alert("The password must be no more than 128 characters long.");
    passwordLength = prompt("How long does your password need to be?");
  }

  var userChoices = prompt(
    "Would you like to include lowercase letters in your password? Yes or No"
  );

  if (userChoices == "Yes") {
    lowerCaseChoice = true;
    characters += lowerCaseLetters;
  } else {
    lowerCaseChoice = false;
  }

  var userChoices = prompt(
    "Would you like to include uppercase letters in your password? Yes or No"
  );

  if (userChoices == "Yes") {
    upperCaseChoice = true;
    characters += upperCaseLetters;
  } else {
    upperCaseChoice = false;
  }

  var userChoices = prompt(
    "Would you like to include numbers in your password? Yes or No"
  );

  if (userChoices == "Yes") {
    numericChoice = true;
    characters += numbers;
  } else {
    numericChoice = false;
  }

  var userChoices = prompt(
    "Would you like to include special characters in your password? Yes or No"
  );

  if (userChoices == "Yes") {
    specialChar = true;
    characters += specialCharacters;
  } else {
    specialChar = false;
  }

  if (!lowerCaseChoice && !upperCaseChoice && !numericChoice && !specialChar) {
    alert("You must select at least 1 character typoe!");
    getUserInput();
  }

  console.log(lowerCaseChoice, upperCaseChoice, numericChoice, specialChar);
}

var numbers = "0123456789";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%&()*+,-./:;<=>?@^_{|}~";

function generatePassword(length, chars) {
  console.log(passwordLength);

  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  getUserInput();
  password = generatePassword(passwordLength, characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
