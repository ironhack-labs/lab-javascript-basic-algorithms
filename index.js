// Iteration 1: Names and Input

//1.1
let hacker1 = "Ahmet";
//1.2
console.log (`The driver's name is ${hacker1}`);
//1.3
let hacker2 = "Ahmet";

//1.4
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Interation 3: Loops

//3.1
let hacker1Spelled = ""

for (let i = 0; i < hacker1.length; i++) {
  hacker1Spelled += `${hacker1[i].toUpperCase()} ` 
}
console.log(hacker1Spelled)

//3.2
let hacker2Spelled = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Spelled += `${hacker2[i]}` 
}
console.log(hacker2Spelled)

//3.3 conditional
if (hacker1.localeCompare(hacker2) == -1){
  console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2) == 1){
  console.log("Yo, the navigator's name goes first, definitely.")
} else if (hacker1.localeCompare(hacker2) == 0){
  console.log("What?! You both have the same name?")
}

//3.3 Using do/while
let i = hacker1.localeCompare(hacker2)
do {
    if (i === -1) {
        console.log("The driver's name goes first")
    } else if (i === 1) {
        console.log("Yo, the navigator's name goes first, definitely.")
    } else if (i === 0) {
      console.log("What?! You both have the same name?")
    } else {
    console.log(i)
    }
    i += 5
} while ( -1 <= i && i <= 1)