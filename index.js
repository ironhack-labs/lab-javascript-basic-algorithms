// Iteration 1: Names and Input

let hacker1 = "Beti";
console.log("The driver's name is " + hacker1);

let hacker2 = "Paula";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1length = hacker1.length;
let hacker2length = hacker2.length;

if (hacker1length > hacker2length){
  console.log("The driver has the longest name. it has " + hacker1lenght + " characters.");
  
} else if (hacker2length > hacker1length){
  console.log("It seems that the navigator has the longest name. It has " + hacker2length + " characters.");
} else {
  console.log("Wow, you both have equally long names. " + hacker1length + "characters!.");
}

// Iteration 3: Loops

let result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}

result = result.trim();
console.log(result);