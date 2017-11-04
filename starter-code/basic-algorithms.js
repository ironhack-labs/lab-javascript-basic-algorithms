console.log("I'm Ready!");

// Names and Input
// 1. Create a variable hacker1 with the driver's name

var hacker1 = "Maria";

// 2. Print "The driver's name is XXXX"

console.log("The driver's name is " + hacker1);

// 3. Create a variable hacker2 and ask the user for the navigator's name

var hacker2 = window.prompt("What is the navigator name?");

// 4. Print "The navigator's name is YYYY"

console.log("The navigator's name is " + hacker2);

//Conditionals
/*
5. Depending on which name is longer, print:
The Driver has the longest name, it has XX characters or
Yo, navigator got the longest name, it has XX characters or
wow, you both got equally long names, XX characters!!
*/

if (hacker1.length > hacker2.length) {
   console.log ("The Driver has the longest name, it has " + hacker1.length + " characters");


 } else if (hacker1.length < hacker2.length) {
   console.log ("Yo, navigator got the longest name, it has " + hacker2.length + " characters")


 } else {
   console.log ("wow, you both got equally long names, " + hacker1.length + " characters!!")
 }

// Lorem ipsum generator

// 6. Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var x = 0;
var hacker3 = hacker1.toUpperCase();
var end = hacker1.length;

var hackerUpperCase = "";


while (x < end) {
  hackerUpperCase += hacker3.charAt(x) + " ";
  x++
}
console.log(hackerUpperCase)

// 7.Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
var newString = "";

function reverseString(str) {
for (var i = hacker2.length - 1; i >= 0; i--) {
  newString += str[i];
}

return newString;
}

reverseString(hacker2);

console.log(newString);

/*
8. Depending on the lexicographic order of the strings, print:
The driver's name goes first
Yo, the navigator goes first definitely
What?! You both got the same name?
*/
var namesList = Array(hacker1, hacker2);

namesList.sort();

if (hacker1 == namesList[0]) {
  console.log("The driver's name, " + hacker1 + ", goes first");
} else if (hacker2 == namesList[0]){
  console.log("Yo, " + hacker2 + ", the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// Los puntos del bonus aún no los he abordado para ponerme al día con el resto de los ejercicios.
