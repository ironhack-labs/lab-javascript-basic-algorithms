// Iteration 1: Names and Input
let hacker1 = 'Harland';
console.log(`The driver's name is ${hacker1}!`);

let hacker2 = 'Yani';
console.log(`The navigator's name is ${hacker2}!`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else console.log (`Wow, you both have equally long names, ${hacker1.lenght} characters!`)

// Iteration 3: Loops

let driversName = "";
for(let i=0; i < hacker1.length; i++) {
  driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName)

let navigatorsName = "";
for(let i = hacker2.length-1; i>=0; i--){
  navigatorsName += hacker2[i]
  }
  console.log(navigatorsName)

let compare = (hacker1.localeCompare(hacker2));
if (compare < 0) {
    console.log ("The driver's name goes first.")
} else if (compare > 0) {
    console.log ("Yo, the navigator goes first definitely.")
} else {
    console.log ("What?! You both have the same name?")
  }