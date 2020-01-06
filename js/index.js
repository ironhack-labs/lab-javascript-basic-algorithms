// Iteration 1: Names and Input
let hacker1 = "Laurel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Laurel";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length}  characters!`
  );
}
if (hacker1.length > hacker2.length) {
  console.log(
    `It seems that ${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
}
if (hacker1.length < hacker2.length) {
  console.log(
    `The ${hacker2} has the longest name it has ${hacker2.length} characters`
  );
}

// Iteration 3: Loops

let counter = 0;
let spaceName = "";
while (counter <= hacker1.length - 1) {
  spaceName += hacker1[counter].toUpperCase() + " ";
  counter++;
}
console.log(spaceName);
let counter2 = hacker1.length - 1;
let spaceName2 = "";
while (counter2 >= 0) {
  spaceName2 += hacker1[counter2];
  counter2--;
}
console.log(spaceName2);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
