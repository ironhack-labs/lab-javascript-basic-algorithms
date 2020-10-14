console.log("I'm ready!");


// Iteration 1: Names and Input

let hacker1 = "james";
console.log("The drivers name is james");
let hacker2 = 'abe';
console.log("The navigators name is abe");


// Iteration 2: Conditionals

console.log(`${hacker1.length}`)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`);
} else console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)

// Iteration 3: Loops

console.log((hacker1.toUpperCase()).split('').join(' ')) // iteration 3.1

function reverseString(hacker1) {
    console.log(hacker1);
}

const name = 'ana';
for (let i = 0; i<hacker1.length; i++) {
  console.log(name[i]);
}