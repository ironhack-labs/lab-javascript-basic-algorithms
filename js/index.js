// Iteration 1: Names and Input

// 1.1 

let hacker1 = "Josh";

// 1.2 

console.log(`The driver's name is ${hacker1}`);

// 1.3

let hacker2 = "Nobody";

// 1.4

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// 2.1

if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, ${hacker1.length} characters.`);
} else {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`);
}

// Iteration 3: Loops

// 3.1

let str = ""

for (char of hacker1) {
  let temp = char.toUpperCase();
  str += temp + " ";
}
console.log(str);

// 3.2

let arr = [];

for (char of hacker2) {
  arr.unshift(char);
}

console.log(arr.join(""));

// 3.3

if (hacker1.localeCompare(hacker2) == 0) {
  console.log(`What?! You both have the same name?`)
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log(`The driver's name goes first`);
} else {
  console.log(`Yo, the navigator goes first definitely.`)
}
