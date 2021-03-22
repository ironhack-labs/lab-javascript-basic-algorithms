// Iteration 1: Names and Input

const hacker1 = "John";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "William";

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
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let capSpaceDriver = "";
for (let i = 0; i < hacker1.length; i++) {
  capSpaceDriver += hacker1[i].toUpperCase() + " ";
}
console.log(capSpaceDriver);

let revNavigator = "";
for (let i = hacker2.length; i >= 0; i--) {
  revNavigator += hacker2.charAt(i);
}
console.log(revNavigator);

if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] === hacker2[0]) {
  console.log("What?! You both have the same name?");
}
