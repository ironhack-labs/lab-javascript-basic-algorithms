// Names and Input

console.log("I'm Ready!");

var hacker1 = "Celine";
console.log("The driver's name is " + hacker1);

var hacker2 = "Christina";
console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name , it has " + hacker2.length + " characters");
}
else if (hacker1.length > hacker2.length){
  console.log("the Driver has the longest name, it has " + hacker1.length + " characters");
} else {
  console.log("wow, you both got equally long names," + hacker1.length + " characters");  
}

var toUpperCaseString = "";
for(var i = 0; i <= hacker1.length-1; i++){
toUpperCaseString += hacker1[i] + " " ;
}
console.log(toUpperCaseString.toUpperCase());

var reverseString = "";
for(var i = hacker2.length-1; i >= 0; i--){
reverseString += hacker2[i];
}
console.log(reverseString);

var names = [hacker2, hacker1];
var sortedName = names.sort();

if (hacker1 === hacker2){
  console.log("What?! You both got the same name?")
} else if (sortedName[0] === hacker1){
  console.log("The driver's name goes first")
} else if (sortedName[0] === hacker2){
  console.log("Yo, the navigator goes first definitely")
}

// Lorem ipsum generator


var userString = prompt("Enter anything");

var userString = userString.replace(' ', '');
var userString = userString.replace(',', '');
var userString = userString.toLowerCase();
console.log(userString);

var reverseStringPal = "";
for(var i = userString.length-1; i >= 0; i--){
reverseStringPal += userString[i];
}
console.log(reverseStringPal);

if (userString.toLowerCase === reverseStringPal.toLowerCase){
  console.log("It is a palindrome !!!");
} else {
  console.log("It is NOT a palindrome");
}