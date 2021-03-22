// Iteration 1: Names and Input

console.log("I'm ready!");

const hacker1 = "Chiara";
console.log("The driver's name is" + " " + hacker1);

const hacker2 = "Svjetlana";
console.log("The navigator's name is" + " " + hacker2);

// Iteration 2: Conditionals

console.log("It seems the navigator has the longest name, it has " + hacker2.length + " characters.")

// Iteration 3: Loops

for (i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase() +  " ");
}
  
for (i = hacker2.length; i >= 0; i--) {
    console.log(hacker2[i]);
}
  
if (hacker1.length > hacker2.length)
    console.log("The driver's name goes first.");
else if (hacker2.length > hacker1.length)
    console.log("Yo, the navigator goes first definitely.");
else (hacker1.length === hacker2.length)
    console.log("What?! You both have the same name?");


