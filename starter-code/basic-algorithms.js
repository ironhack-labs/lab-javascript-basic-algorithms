// Names and Input
var hacker1 = prompt("Please enter driver's name", "Driver's name");
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("Please enter navigator's name", "Navigator's name");
console.log("The navigator's name is " + hacker2);

//Conditionals
//5.Depending on which name is longer, print...

var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;
if (hacker1Length > hacker2Length) {
 console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1Length < hacker2Length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names," + hacker2.length + " characters!!");
}

//6.Print all the characters of the driver's name, separated by a space and in capitals.

var driverToUpperCase = hacker1.toUpperCase();
var driverSpace = '';
for(var i=0; i<driverToUpperCase.length; i++){
   driverSpace += driverToUpperCase.charAt(i) + ' ';   
}
console.log(driverSpace);

//7.Print all the characters of the navigator's name, in reverse order.

var driverReverse = '';
for(var i=hacker1.length-1; i>-1; i--){
   driverReverse += hacker1.charAt(i);   
}
console.log(driverReverse);

//8.Depending on the lexicographic order of the strings, print...

var driverToLowerCase = hacker1.toLowerCase();
var navigatorToLowerCase = hacker2.toLowerCase();
var lexicographicOrder = driverToLowerCase.localeCompare(navigatorToLowerCase)
if (lexicographicOrder == -1){
  console.log("The driver's name goes first.");
} else if (lexicographicOrder == 1){
  console.log("Yo, the navigator goes first definitely.");
} else if (lexicographicOrder === 0){
  console.log("What?! You both got the same name?");
 }

//9.Palindrome
var nameOriginal = prompt("Please enter your palindrome", "Write your palindrome here");
console.log(nameOriginal);
 var nameReverse = '';
for(var i=nameOriginal.length-1; i>-1; i--){
   nameReverse += nameOriginal.charAt(i);   
}
console.log(nameReverse);
var nameOriginalToLowerCase = nameOriginal.toLowerCase();
var nameReverseToLowerCase = nameReverse.toLowerCase();
if (nameOriginalToLowerCase == nameReverseToLowerCase) {
 console.log("Wow! '" + nameOriginal + "' is a palindrome. Well done!");
}else {
  console.log("Oh! '" + nameOriginal + "' is not a palindrome.  I'm sooooooo sorry. Try again!");
}


// Lorem ipsum generator
