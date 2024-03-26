const phraseBox = document.getElementById("phrase");
const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#~!|/$%^&*()_+=]]}{<>-";

function createPassword() {
  const phrase = phraseBox.value.trim(); // Get the trimmed value of the entered phrase
  if (phrase === "") {
    alert("Please enter a phrase.");
    return;
  }

  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  const allChars = upperCase + lowerCase + number + symbol + phrase;

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  password = password.substring(0, length); // Ensure password length is exactly 12 characters

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
  alert("Copied password");
}
