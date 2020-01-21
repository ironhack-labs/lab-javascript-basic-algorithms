// Iteration 1: Names and Input

let hacker1 = "André";
let hacker2 = "Ricardo";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length()}characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops

//3.1

let driver = "";
for (i = 0; i < hacker1.length; i++) {
  driver += (hacker1[i].toUpperCase() + " ");
}
console.log(driver)

//3.2
let navigator = "";
for (i = hacker2.length - 1; i > -1; i--) {
  navigator += hacker2[i];
}
console.log(navigator);

//3.3

// version 1
if (!(hacker1 > hacker2)) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name");
};

//version 2
let compare = (hacker1.localeCompare(hacker2));
console.log(compare)

if (compare < 0) {
  console.log("The driver's name goes first");
} else if (compare > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name");
};