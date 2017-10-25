// Names and Input
//1
var hacker1 = "Marco";
//2
console.log("The driver's name is " + hacker1);
//3
var hacker2 = prompt("The navigator's name is:");
//4
console.log("The navigator's name is " + hacker2);

//Conditionals
//5
var len1 = hacker1.length;
var len2 = hacker2.length;

if(len1 > len2) {
  console.log("The Driver has the longest name, it has " + len1 + " characters");
} else if(len1 < len2){
  console.log("Yo, navigator got the longest name, it has " + len2 + " characters");
} else {
  console.log("wow, you both got equally long names, " + len1 + " characters!!");
}

//Loops
//6
var uCaseDriver = "";
for( i=0; i < len1; i++){
  uCaseDriver += hacker1.toUpperCase()[i] + " ";
}
uCaseDriver = uCaseDriver.slice(0, uCaseDriver.length-1);
console.log(uCaseDriver);

//7
console.log(hacker2.split("").reverse().join(""));

//8
if(hacker1.localeCompare(hacker2) < 0){
  console.log("The driver's name goes first");
} else if(hacker1.localeCompare(hacker2) > 0){
  console.log("Yo, the navigator goes first definitely");
} else console.log("What?! You both got the same name?");

//9
var newPhrase = prompt("Escriba una frase: ");

if(newPhrase.replace(/\s|,|\!|\?/g, '').toLowerCase() === newPhrase.replace(/\s|,|\!|\?/g, '').split("").reverse().join("").toLowerCase()){
  console.log("This phrase is a Palindrome");
} else console.log("This a normal phrase");

//10

// Lorem ipsum generator
