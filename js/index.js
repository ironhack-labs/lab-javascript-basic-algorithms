// Iteration 1: Names and Input

const hacker1 = "Diogo";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Mariana";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "));

// OR
/*Today's Lab Hint*
const name = "John";
console.log('--loop--');
for (let i = 0; i<name.length; i++) {
    console.log(name[i]);
}
console.log('--reversed loop--');
for (let i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
}*/


console.log(hacker2.split("").reverse().join(""));

//OR

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first`)}
    else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
    } else 
    {
    console.log("What?! You both have the same name?");
    }

// OR



    // Bonus Time!
    // Bonus 1