

//daniel here

// Iteration 1: Names and Input

const hacker1 = 'Frank';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Adriano';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if ( hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else  if (hacker1.length === hacker2.length)
  {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}
// Iteration 3: Loops

let spacedName = ''
for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i];
  spacedName += hacker1[i] + ' ';
}
console.log(spacedName.toUpperCase());

let reverseName = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
 
}
console.log(reverseName);

