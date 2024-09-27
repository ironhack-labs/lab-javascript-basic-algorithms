// Iteration 1: Names and Input
let hacker1 = "kofi";

let hacker1 = "kofi";

console.log(`The driver's name is ${hacker1}. `);
let hacker2 = "Olivia";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
let hacker1length = hacker1.length;
let hacker2length = hacker2.length;

if (hacker1length > hacker2length) {
  console.log(
    ` ${hacker1} has the longest name,it has ${hacker1length} characters.`
  );
} else if (hacker2length > hacker1length) {
  console.log(
    `It seems that ${hacker2} has the longest name, it has ${hacker2length} characters`
  );
} else {
  console.log(
    `Wow, you ${hacker1} and ${hacker2} have equally long names, ${
      hacker1length + hacker2length
    }  characters!`
  );
}

// Iteration 3: Loops
let name = "";
for (let i = 0; i <= hacker1length - 1; i++) {
  let letter = hacker1[i];
  name += letter + " ";

  console.log(name.toUpperCase());
}

let name2 = "";
for (let i = hacker2length - 1; i >= 0; i--) {
  let letter = hacker2[i];
  name2 += letter;
}
console.log(name2);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("the driver'S name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("yo,the navigator name goes first,definitely.");
} else {
  console.log(`what? you both have the same name?`);
}

// Iteration 3: Loops
