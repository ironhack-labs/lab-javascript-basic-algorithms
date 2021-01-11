// Iteration 1: Names and Input
let hacker1 = "James";

console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Barry";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker1Length < hacker2Length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// Iteration 3: Loops
let s = " ";
for (let i = 0; i <= hacker1Length -1; i++) {
  s += hacker1[i] + " ";
}
console.log(s.toUpperCase());

let str = " ";
    for (let i = hacker2Length - 1; i >= 0; i--) {
        str += hacker2[i];
    }
    console.log(str);


let namesCompare = hacker1.localeCompare(hacker2);
console.log(namesCompare);

if (namesCompared < 0) {
  console.log("The driver's name goes first");
} else if (namesCompared >= 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  consolg.log("What?! You both have the same name?");
}

