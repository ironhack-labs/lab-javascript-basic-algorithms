// Iteration 1: Names and Input

const hackerOne = "Mark";

console.log(`The driver's name is ${hackerOne}.`);

const hackerTwo = "Jonas";

console.log(`The navigator's name is ${hackerTwo}.`);

// Iteration 2: Conditionals

if (hackerOne.length > hackerTwo.length) {
  console.log(
    `The driver has the longest name, it has ${hackerOne.length} characters.`
  );
} else if (hackerOne.length < hackerTwo.length) {
  console.log(
    `The navigator had the longest name, it has ${hackerTwo.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hackerOne.length}`);
}

// Iteration 3: Loops

// for (let i = 0; i < hackerOne.length; i++){
//   console.log(hackerOne.charAt(i).toUpperCase())
// }

let arrayHackerOne = []

for (let i = 0; i < hackerOne.length; i++){
  arrayHackerOne.push(hackerOne.charAt(i).toUpperCase())
}

arrayHackerOne.join(' ')