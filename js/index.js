console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'tommy';

console.log(hacker1);

let hacker2 = 'jerry';

console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) { console.log(` The driver has the longest name, it has ${hacker1.length} characters. `)}

else if (hacker1.length === hacker2.length) { console.log(` Wow, you both have equally klong names, ${hacker1.length} characters. `)}
 
else { console.log(` The navigator has the longest name, it has ${hacker2.length} characters. `)}

// Iteration 3: Loops

const hacker = hacker1.toUpperCase();

let result = '';
let results = '';
let counter = 0;
while (counter < hacker.length) {
    result += hacker[counter] + " ";
    counter++
}

console.log(result)

for (let i = hacker.length-1; i >= 0; i--) {
         results += hacker[i] + " ";
    }

console.log(results)



const str = ['The drivers name goes first.', 'Yo, the navigator goes first definitely.', 'What?! You both have the same name?'];

console.log(str.sort())