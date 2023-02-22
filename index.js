// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops

console.log("i am ready");

let hacker1 = "nihat";
let hacker2 = "peng";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name,  it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}
let str = "";
for (let i = 0; i < hacker1.length; i++) {
  str += hacker1[i] + " ";
}
console.log(str.toUpperCase());
let str2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  str2 += hacker2[i];
}
console.log(str2);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
