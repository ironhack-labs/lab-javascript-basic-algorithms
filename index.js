// Iteration 1: Names and Input

const hacker1 = "Cristina";
const hacker2 = "Rodolfo";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);




// Iteration 2: Conditionals


if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`) }

// Iteration 3: Loops


let varHacker = "";
for (let i = 0; i < hacker1.length - 1; i++) {
    varHacker = varHacker + hacker1[i].toUpperCase() + " ";
}
varHacker += hacker1[hacker1.length - 1].toUpperCase();
console.log(varHacker);


let varHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    varHacker2 = varHacker2 + hacker2[i];
}

console.log(varHacker2);

const hackers = [hacker1, hacker2];

if (hacker1 === hacker2) {
    console.log("What ? !You both have the same name ?");
}
else {
    hackers.sort();
    if (hackers[0] === hacker1) {
        console.log("The driver's name goes first");

    }
    else {
        console.log("Yo, the navigator goes first, definitely.");
    }
}