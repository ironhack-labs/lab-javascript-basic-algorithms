// Iteration 1: Names and Input
let hacker1="Mark";
console.log(`The drivers name is ${hacker1}`);

console.log(hacker1.length);

let hacker2="Sofia";
console.log(`The navigators name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has longer name ,it has ${hacker1.length} characters!`);
  } else if(hacker2.length>hacker1.length){
    console.log(`The navigator has tha longest name ,it has ${hacker2.length}characters!`);
  } else{
    console.log(`Ẁow,both have equally long names,${hacker1.length} characters!}`);
  }

// Iteration 3: Loops
let output = ""

for (let i = 0; i < hacker1.length; i++) {
    output += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(output.slice(0, -1));

// Print navigator´s name in reverse order
let reverseOutput = "";

for (i = hacker2.length -1; i >= 0; i--) {
    reverseOutput += hacker2.charAt(i);
}
console.log(reverseOutput);

// Print depending on lexicographic order
if (hacker1.slice(0, hacker1.length) < hacker2.slice(0, hacker2.length)) {
  console.log("The driver's name goes first.");
  
} else if (hacker1.slice(0, hacker1.length) > hacker2.slice(0, hacker2.length)) {
  console.log("Yo, the navigator goes first, definitely.");
  
} else if (hacker2.slice(0, hacker2.length) === hacker1.slice(0, hacker1.length)) {
  console.log("What?! You both have the same name?");
}