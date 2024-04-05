const outBox = document.querySelector(".inputBox");
const copy = document.querySelector(".fa-solid");

const range = document.getElementById("rangeBar");
let rangeVal = document.getElementById("displayVal");

const nums = document.querySelector(".nums");
const big = document.querySelector(".uppercase");
const small = document.querySelector(".lowercase");
const special = document.querySelector(".special");

const generate = document.querySelector(".generate");

let password = "";
let passwordLength = range.value;
rangeVal.textContent = range.value; // Initial set
range.addEventListener("input", () => {
  rangeVal.textContent = range.value; // Update on input
});

//password vallues
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialChar = "!@#$%^&*()_+";

//Generate PASSWORD
generate.addEventListener("click", () => {
  outBox.value = generatePassword();
});

function generatePassword() {
  let genPass = "";
  let finalPass = "";

  finalPass += nums.checked ? numbers : "";
  finalPass += big.checked ? upperCase : "";
  finalPass += small.checked ? lowerCase : "";
  finalPass += special.checked ? specialChar : "";

  let i = 1;
  while (i <= rangeVal.innerHTML) {
    genPass += finalPass.charAt(Math.floor(Math.random() * finalPass.length));
    i++;
  }

  return genPass;
}

copy.addEventListener("click", () => {
  if (outBox.value !== "") {
    navigator.clipboard.writeText(outBox.value);
    copy.title = "Password Copied" ; 
  }else{
    alert("Please enter a password to copy");
  }
});
