// Iteration 1: Names and Input
console.log("I am ready");

// Iteration 2: Conditionals


// Iteration 3: Loops

let hacker1 = "Anita";
console.log("The driver's name is " + hacker1);
let hacker2 = "Moses";
console.log("the navigator's name is " + hacker2);

if (hacker1.length < hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
}
let hacker1Uppercased = hacker1.toUpperCase()
console.log(hacker1Uppercased);


let result = ""
for (i=0 ; i<hacker1Uppercased.length; i++) {
  result = result + hacker1Uppercased[i]+" "
}

console.log(result)