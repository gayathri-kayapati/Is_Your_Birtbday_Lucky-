var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector("#output");

outputBox.style.display = "none";

function sumOfDateOfBirth() {
  var dobValue = dateOfBirth.value;
  var dob = dobValue.replaceAll("-", "");
  var sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob[i]);
  }
  return sum;
}
function isYourBirthdayLucky() {
  var sum = sumOfDateOfBirth();
  if (sum % luckyNumber.value === 0) {
    outputBox.style.display = "block";
    outputBox.innerText = luckyNumber.value + " Is a lucky number!🥳";
  } else {
    outputBox.style.display = "block";
    outputBox.innerText = luckyNumber.value + " Is not that lucky 😕";
  }
}
checkBtn.addEventListener("click", isYourBirthdayLucky);
