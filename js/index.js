// Iteration 1: Names and Input

const hacker1 = 'Sara';
const hacker2 = 'Mark';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} character`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} character`);
  } else {`Wow, you both have equally long names, ${hacker1.length} characters!`}

// Iteration 3: Loops

let newHacker1 = '';
for (let i=0; i<hacker1.length; i++) {
 newHacker1 = newHacker1 + ' ' + hacker1[i]
}
console.log(newHacker1.toUpperCase())