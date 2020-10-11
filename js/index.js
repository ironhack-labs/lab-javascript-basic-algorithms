// Iteration 1: Names and Input
const hacker1 = 'Codie';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Opie';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver ${hacker1}, has the longest name with ${hacker1.length} characters.`);
  }
  else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator, ${hacker2}, has the longest name with ${hacker2.length} characters`);
  }
  else{
    console.log(`Wow, both the driver, ${hacker1} and the navigator, ${hacker2}, have ${hacker1.length} characters!`);
  }

// Iteration 3: Loops