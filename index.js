// Iteration 1: Names and Input
let hacker1 = 'Delio';  //driver
let hacker2 = 'Erick';  //navigator

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length}`)
  } else {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters`)
  }