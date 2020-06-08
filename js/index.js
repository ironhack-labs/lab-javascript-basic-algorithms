// Iteration 1: Names and Input
var hacker1 = "Shane";
var hacker2 = "Someone else";
console.log("The drivers name is " + hacker1);
console.log("The navigators name is " + hacker2);

// Iteration 2: Conditionals
var driverLen = hacker1.length;
var navLen = hacker2.length;
if (driverLen > navLen){
    console.log("The driver has the longer name, it has " + driverLen + "characters");
}
else if (driverLen < navLen){
    console.log("It seems the navigator has the longest name, it has " + navLen + "characters");
}
else {
    console.log("Wow, you both have equally long names, " + driverLen + " characters");
}

// Iteration 3: Loops
var hacker1Mod = hacker1.toUpperCase();
var hacker1Mod2 = hacker1Mod.split("");
let hacker1Split = hacker1Mod2.toString();
for (let i = 0; i < hacker1Mod.length; i++){
  var hs1 = hacker1Split.replace(",", " ");
  hacker1Split = hs1;
}
console.log(hacker1Split);

// Reversing the navigators name
console.log(hacker2.split("").reverse().join(""));

// Lexicographic comparison
if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitly");
}
else if (hacker1 < hacker2){
    console.log("The drivers name goes first");
}
else {
    console.log("What?! You both have the same name?");
}


// Bonus 1
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
let loremArr = lorem.split(" ");
console.log("There are " + loremArr.length + " words");

let count = 0;
for (let i = 0; i < loremArr.length; i++){
  if (loremArr[i] == "et"){
    count++;
  }
}
console.log("Et appears " + count + " times.");

// Bonus 2
var phraseToCheck = "race car";
var cleanedPhrase = phraseToCheck.replace(/[^a-z0-9+]+/gi, '');
var isPalindrome = true;
console.log(cleanedPhrase);
for (let i = 0; i < cleanedPhrase.length; i++){
  if (cleanedPhrase[i] != cleanedPhrase[cleanedPhrase.length - 1 - i]){
    isPalindrome = false;
    break;
  }
}
if (isPalindrome){
  console.log(phraseToCheck + " is a palindrome");
}
else {
  console.log(phraseToCheck + " is not a palindrome");
}
