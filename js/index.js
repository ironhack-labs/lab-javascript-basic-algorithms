// Iteration 1: Names and Input

const hacker1 = "José Luis";
const hacker2 = "Raquel";

console.log (`The driver's name is ${hacker1}`);
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function getLongestName(name1,name2){
    if (name1.length > name2.length){
        return `The driver has the longest name, it has ${hacker1.length} characters.`;
    } else if (name2.length > name1.length){
        return `It seems that the navigator has the longest name, it has ${hacker2.length} characters`;
    } else {
        return `Wow, you both have equally long names, ${hacker2.length} characters`;
    }
}

// Iteration 3: Loops

