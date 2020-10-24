console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Flora';
console.log("The driver's name is " + hacker1);

let hacker2 = 'Flovigation';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    'The driver has the longest name, it has ' + hacker1.length + ' characters.'
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      hacker1.length +
      ' characters.'
  );
} else {
  console.log('Wow, you both have equally long names, XX characters!');
}

// Iteration 3: Loops
nameSepCap = '';
for (let letter of hacker1) {
  nameSepCap += letter.toUpperCase() + ' ';
  console.log(letter);
}
console.log(nameSepCap);

nameBack = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  nameBack += hacker2[i];
  console.log(i);
}
console.log(nameBack);

lexOrder = hacker1.localeCompare(hacker2);
switch (lexOrder) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log('Yo, the navigator goes first definitely.');
    break;
  default:
    console.log('What?! You both have the same name?');
}

console.log('a'.localeCompare('a'));
console.log('z'.localeCompare('a'));
