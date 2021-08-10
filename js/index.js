// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Beto";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1.toUpperCase()}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Sandra";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2.toUpperCase()}`);

// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if ( hacker1.length < hacker2.length ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and [in capitals]
let stringToPrint = '';
for ( let i = 0; i < hacker1.length; i++) {
  stringToPrint += hacker1[i] + ' ';
};
console.log(stringToPrint.slice(0, -1).toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. 
  //i.e. `"nhoJ"`
let stringReverse = '';
for ( let i = hacker2.length - 1; i >= 0; i--) {
  stringReverse += hacker2[i];
};
console.log(stringReverse);

// 3.3 Depending on the [lexicographic order] of the strings, print:
if (hacker1[0].toUpperCase() < hacker2[0].toUpperCase()) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.toUpperCase() === hacker2.toUpperCase()) {
  console.log(`What?! You both have the same name?`);
} else if (hacker1[0].toUpperCase() > hacker2[0].toUpperCase()){
  console.log(`Yo, the navigator goes first definitely.`);
}