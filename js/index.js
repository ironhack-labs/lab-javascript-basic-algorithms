// Iteration 1: Names and Input

const hacker1 = "Nic";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Begum";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops


let hacker1WithSpace = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1WithSpace += hacker1[i] + " ";
}
hacker1WithSpace = hacker1WithSpace.slice(0, -1);
hacker1UpperCase = hacker1WithSpace.toUpperCase();
console.log(hacker1UpperCase);


let hacker2Reversed = "";
for (let j = hacker2.length-1; j >= 0; j--) {
    hacker2Reversed += hacker2[j];
}
console.log(hacker2Reversed);