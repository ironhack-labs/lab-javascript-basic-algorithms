let hacker1 = "Nandi";
let hacker2 = "Twaambo";

// Iteration 1 
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Both names have ${hacker1.length} characters.`);
}


// Iteration 3.1
let spaced = "";

for (let i = 0; i < hacker1.length; i++) {
  spaced += hacker1[i].toUpperCase() + " ";
}

console.log(spaced);


// Iteration 3.2
let reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {reverse += hacker2[i];}

console.log(reverse);


// Iteration 3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else {
  console.log("The navigator goes first.");
}
