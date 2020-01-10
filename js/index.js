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

// Iteration 3.1

let arrayHackerOne = []

for (let i = 0; i < hackerOne.length; i++){
  arrayHackerOne.push(hackerOne.charAt(i).toUpperCase())
}

console.log(arrayHackerOne.join(' '))

// Iteration 3.2

function reverseString (string){
  let newString = '';
  for (let i = string.length -1; i >= 0; i--){
    newString += string[i]
  }
  return newString
}

reverseString(arrayHackerOne)