// Iteration 1: Names and Input
let hacker1 = "Toni";
let hacker2 = "Pepito"

console.log(hacker1);
console.log(hacker2);
// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length){
  console.log(hacker1.length)
} else {
console.log(hacker2.length)
}

// Iteration 3: Loops
let nombreMayus = ""

for (let i = 0; i < hacker1.length; i++) {
  nombreMayus += hacker1[i].toUpperCase() + " "
}

console.log(nombreMayus);

let nombreInverso = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
  nombreInverso += hacker1[i]
}
console.log(nombreInverso);