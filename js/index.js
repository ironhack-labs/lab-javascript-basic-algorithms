// Iteration 1: Names and Input
console.log(`Iteration 1: Names and Input`);
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Bea';
//1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`);
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Samuel';
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
console.log(`Iteration 2: Conditionals`);
/* 
  2.1. Depending on which name is longer, print:
    - The driver has the longest name, it has XX characters. or
    - It seems that the navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {  
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
console.log(`Iteration 3: Loops`);

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let separetedHacker1 = '';
for(let i = 0; i < hacker1.length; i++) {
  if (i === 0) {
    separetedHacker1 += `${hacker1[i].toUpperCase()}`;
  } else {
    separetedHacker1 += ` ${hacker1[i].toUpperCase()}`;
  }
}
console.log(separetedHacker1);

//You can do this without a loop:
let separatedDriver = hacker1.toUpperCase().split(``).join(` `);
console.log(separatedDriver);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseHacker2 = '';
for(let i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}
console.log(reverseHacker2);

//You can do this without a loop:
let reverseNavigator = hacker2.split(``).reverse().join(``);
console.log(reverseNavigator);

/*3.3 Depending on the lexicographic order of the strings, print:
  - The driver's name goes first.
  - Yo, the navigator goes first definitely.
  - What?! You both have the same name?
*/
if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else {
  console.log(`What?! You both have the same name?`);
}