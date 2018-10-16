// Names and Input

var hacker1 = "Laura";
console.log("The driver's name is " + hacker1);

var hacker2 = "Régis";
console.log("The navigator's name is " + hacker2);

hacker1Up = hacker1.toUpperCase();

var hacker1Array1 = "";

console.log(hacker1Array1);

var hacker1Array2 = "";

console.log(hacker1Array2);

var promptEndroit = "";
var promptEnvers = "";

promptEndroit = prompt("Give me a string");

var subSections = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ;

var countWords = subSections.split(" ");

var countEt = "" ;


//Conditionals

if (hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}
else if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}

for (i=0; i < hacker1.length; i++){
  hacker1Array1 += hacker1Up[i] + " " ;
}

for (i=hacker1.length-1;i >= 0; i--){
  hacker1Array2 += hacker1[i];
}

if (hacker1[0] > hacker2[0]){
  console.log("Yo, the navigator goes first definitely");
}
else if (hacker1[0] < hacker2[0]){
  console.log("The driver's name goes first");
}
else {
  console.log("What?! You both got the same name?");
}

for (i=promptEndroit.length-1;i >= 0; i--){
  promptEnvers += promptEndroit[i];
}

if (promptEndroit === promptEnvers){
  console.log("It is a palindrome !");
}
else {
  console.log("It is not a palindrome !");
}

// Lorem ipsum generator

console.log("There are " + countWords.length + " words in this string");

for (i=0;i<countWords.length;i++){
  if (countWords[i] === "et"){
    countEt ++; 
  }
}

console.log(countEt);