// Iteration 1: Names and Input
console.log(`----> iteration 1 \n`)

const hacker1 = 'Codie';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Opie';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log(`\n----> iteration 2\n`);

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
console.log(`\n----> iteration 3\n`)

let nameUpper = '';
for (let i = 0; i < hacker1.length; i++) {
 nameUpper += hacker1[i].toUpperCase() + " ";
}

console.log(nameUpper);

let reverseName = '';
for (let i = hacker2.length -1; i >=0; i--){
  reverseName += hacker2[i];
}

console.log(reverseName);

let firstAlpha = hacker1.localeCompare(hacker2);
switch (firstAlpha){
  case -1:
  console.log(`The driver's name (${hacker1}) goes first.`);
  break;

  case 1:
  console.log(`Yo, the navigator, ${hacker2}, goes first definitely.`);
  break;

  default:
  console.log(`What?! You both have the same name?`);
  break;
}