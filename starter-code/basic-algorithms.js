//1. Create a variable hacker1 with the driver's name
var hacker1 = "Oriol";

//2. Print "The driver's name is XXXX"
console.log("The driver's name is: " + hacker1);

//3. Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = window.prompt("What's your name?");

//4. Print "The navigator's name is YYYY"
console.log("The navigator's name is: " + hacker2);

/*5. Depending on which name is longer, print:

    The Driver has the longest name, it has XX characters
    Yo, navigator got the longest name, it has XX characters
    wow, you both got equally long names, XX characters!!*/
    
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//6. Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
//Using strings
var character = "";
for (var i=0; i < hacker1.length; i++){
  character = character + (hacker1.charAt(i) + " ");
}
console.log(character.toUpperCase() + "using string");

//Using arrays
var character =[];
for(var i=0; i < hacker1.length; i++){
  character += hacker1[i] + " ";
}
console.log(character.toUpperCase() + "using arrays");


/* FUNCIÓ PER L'EXERCICI 6
function charactersBySpace(hacker1){
  var character = "";
  for (var i=0; i < hacker1.length; i++){
    character = character + i + " ";
  }
console.log(character.toUpperCase());
}*/


//7. Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
//Using string
var charBackwards = "";
for (var i = hacker2.length; i >= 0; i--){
  charBackwards = charBackwards + (hacker2.charAt(i-1))
}
console.log(charBackwards);

//Using array
var charBackwards = [];
for (var i = hacker2.length; i >= 0; i--){
  charBackwards += hacker2[i];
}
console.log(charBackwards)

//8. Depending on the lexicographic order of the strings, print: (Sort alphabetically)
// - The driver's name goes first
// - Yo, the navigator goes first definitely
// - What?! You both got the same name?

var lexiCompare;
lexiCompare = hacker1.localeCompare(hacker2);

if(lexiCompare < 0){
  console.log("The driver's name goes first")
} else if (lexiCompare > 0){
  console.log("Yo, the navigator goes first definitely")
} else if (lexiCompare === 0){
  console.log("You both got the same name?")
}


//Bonus Time!
//9. Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:
/*
    "A man, a plan, a canal, Panama!"
    "Amor, Roma"
    "race car"
    "stack cats"
    "step on no pets"
    "taco cat"
    "put it up"
    "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

var stringArray = [];
var userString = prompt("Write something stupid please");

userString = userString.toUpperCase();

for (var i=userString.length; i>=0; i--){
 stringArray.push(userString[i]);
}
if (stringArray === userString){
  console.log("This is a palindrome!!")
}
else {
  console.log("What de fuck? This is not a palindrome...")
}

console.log("________________");
console.log(userString);
console.log(stringArray);
