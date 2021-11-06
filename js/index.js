// Iteration 1: Names and Input
let hacker1 = "Calvin";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Ale";
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
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
let tempString = hacker1.split("");
let tempArray = [];

for (let i = 0; i < hacker1.length; i++) {
  tempArray.push(hacker1[i].toUpperCase());
}

console.log(tempArray.join(" "));

let tempString2 = hacker2.split("");
let tempArray2 = [];

for (let j = hacker2.length - 1; j >= 0; j--) {
  tempArray2.push(tempString2[j]);
}
console.log(tempArray2.join(""));

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
