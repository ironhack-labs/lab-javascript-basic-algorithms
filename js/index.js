// Iteration 1: Names and Input

let hacker1 = "Mr Bean";

let hacker2 = "Mr Bear";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

//3.1

let uppercase = "";

for (let i = 0; i < hacker1.length; i++) {
  uppercase += hacker1[i].toUpperCase() + " ";
}
console.log(uppercase);

//3.2

let reverse = ""; //it's empty because otherwise it would not be lined up with the rest of the text

for (i = hacker1.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

//3.3

if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
