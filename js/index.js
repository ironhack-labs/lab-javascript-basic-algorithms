// Iteration 1: Names and Input
//

let hacker1 = "Johny";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alen";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, XX characters!`);
}

// Iteration 3: Loops
let lettersHacker1,
  lettersHacker2 = "";
//3.1 Print all the characters of the driver's name
for (let i = 0; i < hacker1.length; i++) {
  lettersHacker1 += hacker1[i].toUpperCase() + " ";
}

console.log(lettersHacker1);
console.log(lettersHacker2);

//3.2 Print all the characters of the navigator's name, in reverse order.
for (let i = hacker2.length - 1; i >= 0; i--) {
  lettersHacker2 += hacker2[i];
}

//3.3 Depending on the
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
