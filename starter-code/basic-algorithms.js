//Names and Input
console.log("I'm ready");

var hacker1 = "Diane";
console.log("The driver's name is " + hacker1);

//Conditionals
var hacker2 = prompt("what is the name of the navigator?");
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops
var str = "";
for (var i = 0; i < hacker1.length; i++) {
  str +=hacker1[i].toUpperCase() + " ";
}
console.log(str);

var str = hacker2;
var strReverse = str.split("").reverse().join("");
console.log(strReverse);

var strCompare = [hacker1, hacker2];
strCompare.sort();

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker2 < hacker1) {
  console.log("The navigator's name goes first");
} else {
  console.log("What?! You both got the same name?");
}

//Bonus Time!
var palindrome = prompt("What is the first expression?");
var strPalindrome = str.split("").reverse().join("");
strCompare.sort()

if (palindrome = strPalindrome) {
  console.log("This is a palindrome.");
} else {
  console.log("This is not a palindrome.");
}

// Lorem ipsum generator
