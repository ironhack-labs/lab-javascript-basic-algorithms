// Iteration 1: Names and Input
const hacker1 = 'mayara';
console.log(`"The driver's name is ${hacker1}"`);

const hacker2 = 'chrome';
console.log(`"The driver's name is ${hacker2}"`);

// Iteration 2: Conditionals
switch (true) {
  case (hacker1.length > hacker2.length):
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    break;
  case (hacker1.length < hacker2.length):
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    break;
  case (hacker1.length === hacker2.length):
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    break;
}

// Iteration 3: Loops
let newHacker1Name = '';
let newHacker2Name = '';

for (let i = 0; i < hacker1.length; i++) {
  newHacker1Name += `${hacker1[i].toUpperCase()} `;
}
console.log(newHacker1Name);

for (let i = hacker2.length - 1; i >= 0; i--) {
  switch (true) {
    case i === 0:
      const lastLetter = hacker2[i].toUpperCase();
      newHacker2Name += lastLetter;
      break;
    default:
      newHacker2Name += hacker2[i]
      break;
  }
}
console.log(newHacker2Name)

switch (true) {
  case (newHacker1Name[0] > newHacker2Name[0]):
    console.log(`The driver's name goes first.`)
    break;
  case (newHacker1Name[0] < newHacker2Name[0]):
    console.log(`Yo, the navigator goes first definitely.`)
    break;
  case (newHacker1Name[0] === newHacker2Name[0]):
    console.log(`What?! You both have the same name?`)
    break;
}