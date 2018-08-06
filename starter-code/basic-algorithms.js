// Names and Input
var hacker1 = "Pauline";
var hacker2 = prompt("What is the navigator's name?");


console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
  } else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has" + hacker2.length + "characters");
  } else {
    console.log("wow, you both got equally long names, " + hacker1.length + "characters!!");
  }

// Lorem ipsum generator

var result = "";

for (var i = 0; i < hacker1.length; i++){ 
  result += hacker1[i].toUpperCase() + " ";
}

console.log(result);

var order = "";

for (var i = hacker2.length-1; i >= 0; i--){
  order += hacker2[i];
}

console.log(order);

if (hacker1 < hacker2){
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

