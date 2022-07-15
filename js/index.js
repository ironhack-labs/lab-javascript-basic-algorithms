console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Iury";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ghost";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the `);
} else if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops
//3.1
console.log(`${hacker1.toUpperCase().split("").join(" ")}`);

//3.2
console.log(`${hacker2.split("").reverse().join("")}`);

//3.3
if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
