const LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '1234567890'
const SPECIAL_CHARACTERS = '!@#$%&*'


function generatePassword() {
  var uppercaseCheck = document.getElementById("label1");
  var numbersCheck = document.getElementById("label2");
  var specialCharacterCheck = document.getElementById("label3");

  let charset = "";

  if (numbersCheck.checked == true && specialCharacterCheck.checked == true && uppercaseCheck.checked == true) {
    charset = LOWERCASE_CHARACTERS + UPPERCASE_CHARACTERS + NUMBERS + SPECIAL_CHARACTERS;
  } else if (numbersCheck.checked == true && specialCharacterCheck.checked == true) {
    charset = NUMBERS + SPECIAL_CHARACTERS + LOWERCASE_CHARACTERS;
  } else if (numbersCheck.checked == true && uppercaseCheck.checked == true) {
    charset = NUMBERS + LOWERCASE_CHARACTERS + UPPERCASE_CHARACTERS;
  } else if (specialCharacterCheck.checked == true && uppercaseCheck.checked == true) {
    charset = SPECIAL_CHARACTERS + UPPERCASE_CHARACTERS + LOWERCASE_CHARACTERS;
  } else if (uppercaseCheck.checked == true) {
    charset = LOWERCASE_CHARACTERS + UPPERCASE_CHARACTERS;
  } else if (numbersCheck.checked == true) {
    charset = LOWERCASE_CHARACTERS + NUMBERS;
  } else if (specialCharacterCheck.checked == true) {
    charset = LOWERCASE_CHARACTERS + SPECIAL_CHARACTERS;
  } else {
    charset = LOWERCASE_CHARACTERS;
  }
  let length = Math.floor(Math.random() * 5) + 8;
  finalPassword = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    finalPassword += charset.charAt(Math.floor(Math.random() * n));
  }

  var getFinalPasswordID = document.getElementById("generated-password");
  getFinalPasswordID.innerHTML = finalPassword;

}

function updatePasswordStrength() {
  var uppercaseCheck = document.getElementById("label1");
  var numbersCheck = document.getElementById("label2");
  var specialCharacterCheck = document.getElementById("label3");

  var text = document.getElementById("password-strength");

  if (numbersCheck.checked == true && specialCharacterCheck.checked == true && uppercaseCheck.checked == true) {
    text.innerHTML = "Very strong!";
    text.style.color = 'green';
  } else if (numbersCheck.checked == true && specialCharacterCheck.checked == true) {
    text.innerHTML = "Strong!";
    text.style.color = 'green';
  } else if (numbersCheck.checked == true && uppercaseCheck.checked == true) {
    text.innerHTML = "Strong!";
    text.style.color = 'green';
  } else if (specialCharacterCheck.checked == true && uppercaseCheck.checked == true) {
    text.innerHTML = "Strong!";
    text.style.color = 'green';
  } else if (uppercaseCheck.checked == true) {
    text.innerHTML = "Weak!";
    text.style.color = 'red';
  } else if (numbersCheck.checked == true) {
    text.innerHTML = "Weak!";
    text.style.color = 'red';
  } else if (specialCharacterCheck.checked == true) {
    text.innerHTML = "Better!";
    text.style.color = 'orange';
  } else {
    text.innerHTML = "Weak!";
    text.style.color = "red";
  }
}