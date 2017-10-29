// Names and Input

var hacker1 = "Marco";

console.log("The driver's name is " + hacker1);

var hacker2 = prompt("The navigator's name is:");

console.log("The navigator's name is " + hacker2);

//Conditionals

if(hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// Loops

console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split("").reverse().join(""));

var compare = hacker1.localeCompare(hacker2);

if (compare <= -1){
  console.log("The driver's name goes first");
} else if (compare >= 1) {
  console.log("Yo, the navigator goes first definitely");
} else console.log("What?! You both got the same name?");

// Bonus Time! - Palindrome

var tryPalindrome = prompt("Write a text, we check if it is a palindrome");
console.log("Sorry, we are working on this function");

// Bonus Time! - Lorem ipsum

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed purus ut diam varius rhoncus vitae vel augue. In bibendum augue arcu, sit amet egestas dui suscipit vel. In hac habitasse platea dictumst.";
console.log("Lorem ipsum has " + loremIpsum.length + " words.");
console.log("Lorem ipsum has " + loremIpsum.match(/et/g) .length + " latin words with -et");
