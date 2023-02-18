// Iteration 1: Names and Input
let hacker1 = prompt("What is the driver's name?");
console.log(`The driver's name is ${hacker1}`);
let hacker2 = prompt("What is the navigator's name?");
console.log(`The navigator's name is ${hacker1}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length < hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

//loops
//loops1
//R A C H E L
let i = 1;
let result = hacker1[0];

while (i < hacker1.length) {
  result += " " + hacker1[i].toUpperCase();
  i++;
}
console.log(result);


// loops2
let hacker2Reverse = ""
  for (let i=hacker2.length-1; i>=0; i--) {
    hacker2Reverse += hacker2[i];
    
 }

console.log(hacker2Reverse)


// Lexicographic order
if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first." )
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}