// Iteration 1: Names and Input

let hacker1 = "Marc";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Wil";
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    } else if (hacker2.length > hacker1.length) {
    console.log(`It seems, that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else {
        console.log(`Wow, you both have equally long names`)
    }

// Iteration 3.1: Loops

let capital = hacker1.toUpperCase();
console.log(capital.split().join(' '));

// Iteration 3.2: Loops
// via https://stackabuse.com/how-to-reverse-a-string-in-javascript/
// One possibility
console.log('Reversed string 1: ' +[...hacker1].reverse().join(''));
// Another possibility
let reversed = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    reversed += hacker1[i];
  }
console.log('Reversed string 2: ' + reversed);

// Iteration 3.3: Loops
if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

