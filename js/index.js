// Iteration 1: Names and Input
let hacker1 = "Laura";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Cassandre";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);


// Iteration 3: Loops
//  Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let printChar = ""

for (let i = 0 ; i < hacker1.length ; i++) {
  printChar += hacker1[i] + " ";
}

console.log(printChar.toUpperCase());

// Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = ""

for (let i = hacker2.length -1 ; i >= 0 ; i--){
  reverseName += hacker2[i];
}

console.log(reverseName);


//Depending on the lexicographic order of the strings
if (hacker1[0].localeCompare(hacker2[0]) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1[0].localeCompare(hacker2[0]) === 1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`);