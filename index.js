// Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
//1.2 Print "The driver's name is XXXX".
//1.3 Create a variable hacker2 with the navigator's name.
//1.4 Print "The navigator's name is YYYY".

const hacker1 = 'Cassandre';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Amina';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// The driver has the longest name, it has XX characters. or
// It seems that the navigator has the longest name, it has XX characters. or
// Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

const hacker1Upper = hacker1.toUpperCase();
console.log(hacker1Upper);

// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

const lastIndex = hacker2.length - 1;
let hacker2Reversed = "";

for (let i = lastIndex; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reversed += char;
}
console.log(hacker2Reversed);

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

const result = hacker1.localeCompare(hacker2);

if (result === -1){
  console.log(`The driver's name goes first.`);
}
else if (result === 1){
  console.log(`Yo, the navigator goes first definitely.`);
}
else {
  console.log(`What?! You both have the same name?`)
}

//comment

