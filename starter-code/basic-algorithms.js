// Names and Input
var Hacker1 =  prompt("The driver's name");
var Hacker2 = prompt("The navigator's name is ");

console.log("the driver's name is " + Hacker1);

console.log("The navigator's name is " + Hacker2);

var Name1 = [Hacker1];
var Name2 = [Hacker2];

var Hacker11 = Hacker1.split("").join(" ").toUpperCase();
console.log(Hacker11);
var Hacker12 = Hacker2.split("").reverse().join("");
console.log(Hacker12);

//Conditionals

if(Hacker1.length > Hacker2.length){
  console.log("the driver has the longest name it has "+ Hacker1.length + " characters");
  
} else if (Hacker2.length> Hacker1.length){
  console.log("the navigator has the longest name it has "+ Hacker2.length + " characters");
  
} else if(Hacker1.length == Hacker2.length){
  console.log("Wow you goth equally long names it has "+ Hacker2.length+ " characters");
}

if(Name1>Name2){
  console.log("The driver's name goes first");
}else if(Name2>Name1){
  console.log("Yo, the navigator goes first definitely");
} else if(Name1 === Name2){
  console.log("What?! You both got the same name?");
}

// Lorem ipsum generator

function countWords(str){
  return str.split(" ").length;
}

     console.log(countWords(lorem)+" Words found at Lorem");