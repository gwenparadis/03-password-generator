// Assignment Code
const generateBtn = document.querySelector("#generate");

//necessary variables
let passwordLength;
let lowercase;
let uppercase;
let numbers;
let specials;

// Password characters selection
const lower = ["abcdefghijklmnopqrstuvwxyz"];
const upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const num = ["1234567890"]
const special = ["~!@#$%^&*()_+"];
let passwordChar = [];
let password = "";

//TO DO: Generate Password function with Acceptance Criteria

function generatePassword() {
  // First prompt asking for user desired password length
  let passwordLength = prompt("Choose the length of your password. This needs to be between 8 - 128");
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
    return alert("Choose a number between 8-128, or the result will be undefined.");
  }

  // prompts and code responses to choose Password Characters
  let lowercase = confirm("Click ok if would you like your password to contain lowercase letters.");
  if (lowercase === true) {
    passwordChar += lower;
  }
  uppercase = confirm("Click ok if would you like your password to contain uppercase letters.");
  if (uppercase === true) {
    passwordChar += upper;
  }
  numbers = confirm("Click ok if would you like your password to contain numbers.");
  if (numbers === true) {
    passwordChar += num;
  }
  specials = confirm("Click ok if would you like your password to contain special characters.");
  if (specials === true) {
    passwordChar += special;
  }
  confirm("Reminder! If you did not select at least one of these character types, the result will be undefined.");

  // for loop to combine all of the input from prompts and character selections
  for (let i = 0; i < passwordLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }
  // create the final password to be written by writePassword function
  return (password);
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});