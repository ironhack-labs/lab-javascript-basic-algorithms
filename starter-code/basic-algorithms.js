console.log("I'm Ready!");
var hacker1 = "Pepito";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

var hacker1Characters = "";
var hacker2Characters = "";

var newString = prompt("Introduce a new string");

if (hacker1.length === hacker2.length) {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!");
} else if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}

for (var i = 0; i < hacker1.length; i++) {
  hacker1Characters += hacker1[i] + " ";
}

console.log(hacker1Characters.toUpperCase());

for (var j = hacker2.length-1; j >= 0; j--) {
  hacker2Characters += hacker2[j];
}

console.log(hacker2Characters);

if (hacker1 === hacker2) {
  console.log("What?! You both got the same name?");
}else {
  if(hacker1 < hacker2){
    console.log("The driver's name goes first");
  }else{
    console.log("Yo, the navigator goes first definitely");
  }
}

var newStringToLower = newString.toLowerCase();
var newStringCleaned = newStringToLower.replace(/[^a-z]/gi, '');
var newStringSplitted = newStringCleaned.split("");
var newStringReverse = newStringSplitted.reverse();
var newStringReverseToWord = newStringReverse.join('');

if (newStringCleaned === newStringReverseToWord) {
  console.log("Both of them are a palindrome");
} else {
  console.log("They are not a palindrome");
}