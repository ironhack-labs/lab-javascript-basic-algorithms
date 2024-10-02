// Iteration 1: Names and Input


const hacker1 = "Yvann";
const hacker2 = "Samy";
let result = " ";
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, both names have the same length, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

for (i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " ";
}

console.log(result.trim());
console.log("string with spaces", hacker1.toUpperCase().split("").join(" "));

// let reversedName = "";
let reversedName = hacker2.split("").reverse().join("");
console.log("string reversed here =>",reversedName);


for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}

console.log(reversedName);

if (hacker1.localeCompare(navigator) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker2.localeCompare(navigator) > 0) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
  