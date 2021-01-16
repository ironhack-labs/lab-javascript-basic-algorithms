// Iteration 1: Names and Input
let hacker1 = 'mayara';
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'chrome';
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
hacker1 = hacker1.toUpperCase().split('').join(' ');
console.log(hacker1)

hacker2 = hacker2.split('').reverse();
hacker2[5] = 'C'
hacker2 = hacker2.join('');
console.log(hacker2)

switch (true) {
  case (hacker1[0] > hacker2[0]):
    console.log(`The driver's name goes first.`)
    break;
  case (hacker1[0] < hacker2[0]):
    console.log(`Yo, the navigator goes first definitely.`)
    break;
  case (hacker1[0] === hacker2[0]):
    console.log(`What?! You both have the same name?`)
    break;
}