// Iteration 1: Names and Input
//

let hacker1 = "Rafael"

console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Mario"

console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log("Wow, you both have equally long names.")
}

// The driver has the longest name, it has XX characters.
// It seems that the navigator has the longest name, it has XX characters.

// Iteration 3: Loops

console.log(hacker1.toUpperCase())

//for (let i = 0; i < hacker1.length; i++){
//
//}

// console.log(hacker1.toUpperCase().split("").join(" "));

let spacedHacker1 = '';
for (let i = 0; i <= hacker1.length; i++) {
    spacedHacker1 = hacker1.charAt(i) + ' '
}

let reversedHacker2 = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedHacker2 += hacker2[i];
}

console.log(reversedHacker2);

if (spacedHacker1.localeCompare(reversedHacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (spacedHacker1.localeCompare(reversedHacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//console.log('spacedHacker1'.localeCompare('reversedHacker2'));

// let a = "a"
// let b = "b"

//console.log(a.localeCompare(b));