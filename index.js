// Iteration 1: Names and Input
const hacker1 = "Pedro";
const hacker2 = "Felipe";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) { 
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}



// Iteration 3: Loops
const nameJohn = "John";
let newName = "";
for (letter of nameJohn) {
    newName += `${letter.toUpperCase()} `; 
}
console.log(newName);

let name1 = "John";

let reversed = "";

for (let i = name1.length - 1; i >= 0; i--) {
    reversed += name1[i];
}
console.log(reversed);



const result = hacker1.localeCompare(hacker2);
console.log(result);
