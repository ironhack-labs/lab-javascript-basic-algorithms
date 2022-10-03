// Iteration 1: Names and Input
let hacker1 = "André";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Carlota";
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

let separatedChar = hacker1.split("").join(" ");
console.log(separatedChar);

let reversedChar = hacker2.split("").reverse().join("");
console.log(reversedChar);

let spaceStr = "";

for (let i = 0; i < hacker1.length; i++) {
  spaceStr += hacker1[i] + " ";
}
console.log(spaceStr);

let reversedStr = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  reversedStr += hacker2[j];
}
console.log(reversedStr);

if (hacker2.localeCompare(hacker1) === 1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
