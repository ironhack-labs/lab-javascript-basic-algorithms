// Names and Input
var hacker1 = "Marco";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("The navigator's name is:");
console.log("The navigator's name is " + hacker2);

//Conditionals
var len1 = hacker1.length;
var len2 = hacker2.length;

if(len1 > len2) {
  console.log("The Driver has the longest name, it has " + len1 + " characters")
} else if(len1 < len2){
  console.log("Yo, navigator got the longest name, it has " + len2 + " characters")
} else {
  console.log("wow, you both got equally long names, " + len1 + " characters!!")
}

//Loops
hacker1 = hacker1.toUpperCase();
var uCaseDriver;
for( i=0; i < len1; i++){
  uCaseDriver[i] = hacker1[i];
}
console.log(uCaseDriver);

// Lorem ipsum generator
