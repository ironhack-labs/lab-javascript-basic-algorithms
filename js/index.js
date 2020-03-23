// Iteration 1: Names and Input

const hacker1 = 'Lucas';

console.log(`"The driver´s name is ${hacker1}"`);

const hacker2 = 'Jesus';

console.log(`"The navigator´s name is ${hacker2}"`)

// Iteration 2: Conditionals

let driverNameLength = hacker1.length;

let navigatorNameLength = hacker2.length;

if (driverNameLength > navigatorNameLength){
  console.log(`"The driver has the longest name, it has ${driverNameLength} characters"`)
} else if (driverNameLength < navigatorNameLength) {
  console.log(`"It seems that the navigator has the longest name, it has ${navigatorNameLength} characters"`)
} else {
  console.log(`"Wow, you both have equally long names, ${driverNameLength} characters!"`)
}

// Iteration 3: Loops

let driversCharacters = "";

for (let i = 0; i < hacker1.length; i++) {
  driversCharacters += hacker1[i] + " ";
}

console.log(driversCharacters.toUpperCase());

// 3.2

let navigatorsNameReverse = "";

for (let i = hacker2.length-1; i >= 0; i--) {
  navigatorsNameReverse += hacker2[i] ;
}

console.log(navigatorsNameReverse);

// 3.3

if (hacker1 === hacker2) {
    console.log('The driver´s name goes first.') ;
} else if (hacker1 > hacker2) {
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?')
}
