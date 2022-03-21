
console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "João Dias";
console.log(`"The driver's name is ${hacker1}"`);
const hacker2 = "Pelé Dos Santos";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
function lengthNames(hacker1, hacker2) {
    const numberHacker1 = hacker1.length;
    const numberHacker2 = hacker2.length;

    if(numberHacker1 > numberHacker2) {
        return `The driver has the longest name, it has ${numberHacker1} characters.`
    } else if(numberHacker2 > numberHacker1){
        return `It seems that the navigator has the longest name, it has ${numberHacker2} characters.`
    } else {
        return `Wow, you both have equally long names, ${numberHacker1} characters!`
    }
}

lengthNames(hacker1, hacker2);
// Iteration 3: Loops
