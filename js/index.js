console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Rubén";
let hacker2 = "Pedro";

console.log("The driver's name is", hacker1);
console.log("The driver's name is", hacker2);

// Iteration 2: Conditionals

let hacker1Lenght = hacker1.length;
let hacker2Lenght = hacker2.length;

if(hacker1Lenght > hacker2Lenght){
  console.log("The driver has the longest name, it has", hacker1Lenght, "characters.");
  } else if(hacker1Lenght < hacker2Lenght){
  console.log("It seems that the navigator has the longest name, it has", hacker2Lenght, "characters.");
  } else {
   console.log("Wow, you both have equally long names,", hacker1Lenght, "characters.");
}

// Iteration 3: Loops