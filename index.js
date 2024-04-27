// Iteration 1: Names and Input

let hacker1 = "DriverName"
console.log(`${hacker1}`)

let hacker2 = "NavigatorName";
console.log(`${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} `)
} else if (hacker1.length < hacker2.length) 
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
  else { 
    console.log(`Wow, you both have eqully long names, ${hacker1.length} characters !`)
  }

// Iteration 3: Loops
let space = "";
for (let i = 0; i < hacker1.length; i++) {
    space += hacker1[i].toUpperCase() + " "; 
} console.log(space.trim());

let reverse = ""
for (let i = hacker2.length - 1; i >= 0;  i--) {
    reverse += hacker2[i];
} console.log(reverse)

if ( hacker1 < hacker2 ) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?")
}