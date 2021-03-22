// Iteration 1: Names and Input
let hacker1 = 'Juan';
console.log(`The driver name is ${hacker1}`);

let hacker2 = 'Jose';
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
  }

// Iteration 3: Loops
//3.1
let h1upperCased = hacker1.toUpperCase();
let bigName = ""

for (let i=0; i<h1upperCased.length; i++) {
  bigName += h1upperCased[i] + " ";
};
console.log(bigName);

//3.2
let h2Inverse = "";
  for (let i = hacker2.length-1; i>=0; i--) {
  h2Inverse = h2Inverse + hacker2[i];
}
console.log(h2Inverse);

//3.3
for (let i=0; hacker)
