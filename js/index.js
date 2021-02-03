// Iteration 1: Names and Input

console.log("I'm ready!");
let hacker1 = "Mackenzie";
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Anna";
console.log(`The navigator's name is ${hacker2}.`)

let hacker3 = "Anais";
console.log(`The other navigator's name is ${hacker3}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
} else {
  console.log("Invalid statement")
}

// Iteration 3: Loops

// STEP 3.1
let str = "";
for (let i = 0; i < hacker1.length; i++) {
  str = str + hacker1[i] + ' ';

};
console.log(str.toUpperCase())

// STEP 3.2
let str2 = "";
for (var i = hacker1.length - 1; i >= 0; i--) {
  str2 = str2 + hacker1[i];
}
console.log(str2);

// STEP 3.3

if (hacker1.localeCompare(hacker2)=== -1) {
  console.log("The driver's name goes first.")
 } else if (hacker1.localeCompare(hacker2)=== 1) {
  console.log("Yo, the navigator goes first definitely.")
  } else if (hacker1.localeCompare(hacker2)=== 0){
    console.log("What?! You both have the same name?");
  }
  else {
    console.log("Invalid statement")
  }




