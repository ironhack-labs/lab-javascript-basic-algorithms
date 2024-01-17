// Iteration 1: Names and Input

console.log("I'm ready!");
let hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Juanitto";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver(${hacker1}) has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator(${hacker2}) has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let name1 = "";

for (let i = 0; i < hacker1.length; i++) {
  name1 += hacker1[i].toUpperCase() + " ";
}

console.log(name1);

//3.2
let name2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  name2 += hacker2[i];
}
console.log(name2);

//3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver(${hacker1}) name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator(${hacker2}) goes first definitely.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
}
