// console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "Rob";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jake";

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}


// Iteration 3: Loops
// 3.1
let nameDriver = "";

for (let character of hacker1) {
    nameDriver = nameDriver + character + " ";
}

console.log(nameDriver.toUpperCase());


// 3.2
let reverseName = [];

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName.push(hacker2[i]);
}

console.log(reverseName);


// 3.3
let orderedArray = [hacker1, hacker2];
orderedArray.sort((a, b) => {
    if (a > b) {
        console.log("The driver's name goes first.");
    } else if (a < b) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
  }
);
