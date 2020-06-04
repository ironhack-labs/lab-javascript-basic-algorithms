// Iteration 1: Names and Input
const hacker1 = "Laura";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Luciana";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

//Driver name to uppercase
let upperDriverName = [];
for(let i = 0; i < hacker1.length; i++){
  upperDriverName.push(hacker1[i].toUpperCase())
}
console.log(upperDriverName.join(" "))

//Navigator name reversed
let reversedNavName = [];
for(let i = hacker2.length - 1; i >= 0; i--){
  reversedNavName.push(hacker2[i]);
}
console.log(reversedNavName.join(""));

//Names compared in lexicographic order
if(hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if(hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

