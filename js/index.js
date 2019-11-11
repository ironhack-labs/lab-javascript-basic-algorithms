// Iteration 1: Names and Input

let hacker1 = "Joan";
let hacker2 = "Neo";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
  if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name, it has " +
        hacker1.length +
        " characters."
    );
  }
} else {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
}

// Iteration 3: Loops

var hacker1lett = [];
var hacker1up = hacker1.toUpperCase();

for (let cont = 0; cont < hacker1.length; cont++ ){
  hacker1lett.push(hacker1up.charAt(cont));
  hacker1lett.push(" ");
} 

console.log(hacker1lett.join(""));

/* Alternativa Iteración 3 

console.log(hacker1.toUpperCase().split("").join(" "));

*/

var hacker2lett = [];

for (let cont = hacker2.length-1; cont >= 0; cont-- ){
  hacker2lett.push(hacker2.charAt(cont));
} 

console.log(hacker2lett.join(""));

if (hacker1 < hacker2){
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2 ) {
      console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}
