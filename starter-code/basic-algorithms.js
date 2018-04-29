// Names and Input
var hacker1 = "";
var hacker2= window.prompt(message, "¿Cual es tu nombre?");

console.log("The drive is XXXX");
console.log("The navigator's name is YYYY");

//Conditionals
if(hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has" + hacker1.length +" characters");
}else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}else if(hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, "+ hacker1.length +" characters!!")
}
// Lorem ipsum generator
