// Names and Input
var hacker1= "Robert Enyiwork";
console.log("The driver's name is " + hacker1);
var hacker2=prompt("What is your name");
console.log("The navigator's name is " + hacker2);
//Conditionals
if (hacker1.length < hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
}
else if (hacker1.length > hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
}
else if (hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")
}
console.log(hacker1.split("").toString().toUpperCase().replace(/,/g," "));
console.log(hacker2.split("").reverse().join("").toLowerCase());

if (hacker1 < hacker2) {
  console.log(hacker1);
  console.log(hacker2);
}
else if (hacker1 > hacker2) {
  console.log(hacker2)
  console.log(hacker1)
}
else {
  console.log("What?! You both got the same name!")
}
// Lorem ipsum generator
var input=prompt("Enter String")
