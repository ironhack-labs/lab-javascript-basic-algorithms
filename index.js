// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Chris";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

// 3.1

let result = "";

for(let i = 0; i <= 3; i++){
    // result = result + hacker1[i];
    result += hacker1[i].toUpperCase() + " ";
}

console.log(result);

// 3.2

let result2 = "";

for(let index = 3; index >= 0; index--){
    result2 += hacker1[index];
}

console.log(result2);

// 3.3

if(hacker1 < hacker2){
   console.log(`The driver's name goes first.`);
} else if(hacker1 > hacker2){
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}