// Iteration 1: Names and Input

let hacker1 = "David";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alejandro"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

/* 3.1 Print all the characters of the driver's name,
separated by a space and in capitals i.e. "J O H N" */

let hacker1New = ""

for (let i=0; i<hacker1.length; i++) {
  hacker1New += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1New)

/* 3.2 Print all the characters of the navigator's name,
in reverse order. i.e. "nhoJ" */

// Option #1

let hacker2Reversed = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

// Option #2

let reversedHacker2 = ""

for (let key of hacker2) {
  reversedHacker2 = key + reversedHacker2
}
console.log (reversedHacker2)

/* 3.3 Depending on the lexicographic
order of the strings */

if (hacker1 < hacker2) {
  console.log (`The driver's name goes first.`)
} else if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`);
}