// Iteration 1: Names and Input
const hacker1 = "Szczepan";
console.log(`The driver's name is  ${hacker1}`);

const hacker2 = "Grzegorz";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

}

// Iteration 3: Loops

//1 
let hacker1UpperCassed = "";

for (let i = 0; i < hacker1.length; i++) {
    
    const char = hacker1[i].toUpperCase();
    hacker1UpperCassed += char;
}

console.log(...hacker1UpperCassed);

//2
let reversedString = "";
let reversedString1 = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  if (i == 0) {
    reversedString1 = reversedString + hacker1[i].toUpperCase();
  }
  reversedString += hacker1[i];
}
console.log(reversedString1);

//3

