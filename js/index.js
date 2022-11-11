console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Irene";
console.log(`The driver's name is: ${hacker1}`);

let hacker2 = "Johnn";
console.log(`The navigator's name is: ${hacker2}`);


// Iteration 2: Conditionals

let driversNameLength = hacker1.length;
let navigatorsNameLength = hacker2.length;

if(driversNameLength > navigatorsNameLength) {
    console.log(`The driver has the longest name, it has ${driversNameLength}characters.`);
} else if (driversNameLength < navigatorsNameLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorsNameLength} characters.`);
} else if(driversNameLength === navigatorsNameLength) {
    console.log(`Wow, you both have equally long names, ${driversNameLength} characters!`);
}


// Iteration 3: Loops
let i = 0;

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1.toLocaleUpperCase()[i] + " ");
  }
