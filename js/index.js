// Iteration 1: Names and Input
var hacker1 = "Kevin Hernandez";
var hacker2 = "Liz Diaz";

console.log(`"The driver's name is ${hacker1}."`);
console.log(`"The navigator's name is ${hacker2}."`)
console.log("------------------------------");

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
};
console.log("------------------------------");

// Iteration 3: Loops
var capsArry = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        capsArry += hacker1[i].toUpperCase();
    } else {
        capsArry += hacker1[i].toUpperCase() + " ";
    }
}
console.log(capsArry);
