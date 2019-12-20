// Iteration 1: Names and Input
// ------------------------------------------------------------------------------------

// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Alejandro";

// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = "zAlberto";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + hacker2);


// Iteration 2: NConditionals
// ------------------------------------------------------------------------------------

// 2.1. Depending on which name is longer, print:
const longHacker1 = hacker1.length;
const longHacker2 = hacker2.length;

if(longHacker1 > longHacker2){
  console.log("The driver has the longest name, it has " + longHacker1 + " characters.");
} 
else if (longHacker1 < longHacker2){
  console.log("It seems that the navigator has the longest name, it has " + longHacker2 + " characters.");
} 
else {
  console.log("Wow, you both have equally long names, XX characters!.");
} 



// Iteration 3: Loops
// --------------------------------------------------------------------------------------------------------------------

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
const name = "JOHN";
let splitname = name.split("");
let final = "";
let length = name.length;

for (let i = 0; i < length; i++){
  final += splitname[i];
  if(i < name.length -1){
    final += " ";
  } 
} 
console.log(final);



// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
final = "";

while (length>=0) {
  final = final + name.charAt(length);
  length--;
}
console.log(final)



// 3.3 Depending on the lexicographic order of the strings, print:

console.log(hacker1.localeCompare(hacker2));

if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}
else if(hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("The driver's name goes first.");
}
