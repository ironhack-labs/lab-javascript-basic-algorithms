// Iteration 1: Names and Input
let hacker1 = "Sanka";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Stefan";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length - 1} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length -
      1} characters.`
  );
} else {
  console.log(`They are equal they have ${hacker2.length - 1} characters.`);
}

// Iteration 3: Loops
let hacker1Name = "";
for (let i = 0; i< hacker1.length; i++) {
  hacker1Name += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Name);

let navigator1Name="";
for (let i = hacker2.length; i>0; i--) {
    navigator1Name += hacker2[i];
  }

  console.log(navigator1Name);

  
let n = hacker1.localeCompare(hacker2)

if (n < 0){
  console.log(“The driver’s name goes first”);
} else if (n > 0) {
  console.log(“bla”);
} else {
  console.log(“same”);
}