// Names and Input
var hacker1 = "Mario";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("Tell me your name");
console.log("The navigator's name is " + hacker2);


//Conditionals
if(hacker1.length > hacker2.length){
  console.log("Hacker1 has " + hacker1.length + " characters");
}else if(hacker1.length < hacker2.length){
  console.log("Hacker2 has " + hacker2.length + " characters");
}else{
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!");
}


// Lorem ipsum generator
