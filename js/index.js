// Iteration 1: Names and Input
// 
const hacker1 = 'Kirsi';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Ferhat';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names,  characters!`)
}

// Iteration 3: Loops
// 3.1

let str = ''
for (let char of hacker1) {
  str += char.toUpperCase() + ' '
}

console.log(str);

// 3.2
let reversedNavigator = '';
for (let char of hacker2) {
reversedNavigator = char + reversedNavigator;
}
console.log(reversedNavigator);

// 3.3
let arr = [hacker1, hacker2];
const sortedArr = arr.sort();

if (hacker1.localeCompare(hacker2) === 0) {
  console.log('What?! You both have the same name?')
} else if (sortedArr[0] === hacker1) {
  console.log("The driver's name goes first.")
} else {
  console.log('Yo, the navigator goes first definitely.')
}






