console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Manuel';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Myrian';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  var a = hacker1.length
  console.log(`The driver has the longest name, it has ${a} characters.`)
}
else if (hacker2.length > hacker1.length) {
  var b = hacker2.length
  console.log(`It seems the navigator has the longest name, it has ${b} characters.`)
}else {
  console.log('Wow, you both have equally long names, '+ hacker1.length + ' characters!')
}
// Iteration 3: Loops
