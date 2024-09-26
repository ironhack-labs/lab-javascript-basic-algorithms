// Iteration 1: Names and Input

const hacker1 = "JUAN"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "DIEGO"
console.log(`The navigato's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

const dividedLetters = hacker1.toUpperCase().split('').join(' ');
console.log(dividedLetters)

const reverseOrder = hacker2.split('').reverse().join('');
console.log(reverseOrder)





