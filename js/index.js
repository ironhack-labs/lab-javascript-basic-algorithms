// Iteration 1: Names and Input
let hacker1 = "Elisenda"
console.log(`The drivers name is ${hacker1}`)

let hacker2 = "Felipe"
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals > Depending on which name is longer, print:
let driver = hacker1.length
let navigator = hacker2.length

if (driver > navigator) {
  console.log(`The driver has the longest name, it has ${driver} characters`)
} else if (driver < navigator) {
  console.log(`It seems that the navigator has the longest name, it has ${navigator} characters`)
} else if (driver == navigator) {
  console.log("Wow, you both have equally long names, characters!")
} else {
  console.log("Woow, you're both a hackers")
}

// Iteration 3: Loops

// 3.1 Print all the characters of the navigators driver's name,separated by a space and in capital

let hacker2Capital = hacker2.toUpperCase();

console.log(hacker2Capital.split(""));

/* Comment 3.1: He podido hacer el ejercicio pero sin utilizar un loop. Cuando intento usar un loop, 
no consigo que los caracteres estén separados ni en la misma fila */

for (let value of hacker2Capital) {
 console.log(value);
}

// 3.2 Print all the characters of the navigator's name, in reverse order

let reverseNavigator = "";

for ( let i = hacker2.length - 1; i >= 0 ; i--) {
  reverseNavigator += hacker2[i];
}

console.log(reverseNavigator);

