// Iteration 1: Names and Input

const hacker1 = "Alice";
console.log("The driver's name is " + hacker1);

const hacker2 = "Bob";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}


// Iteration 3: Loops
if (hacker1 < hacker2) {
  console.log("El nombre del conductor va primero.");
} else if (hacker1 > hacker2) {
  console.log("¡Ey, el navegador va primero, definitivamente!");
} else {
  console.log("¿Qué?! ¡Ambos tienen el mismo nombre?");
}

let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);


if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
