// Iteration 1: Names and Input

 let hacker1 = 'Vini'
	console.log(`The driver's name is ${hacker1}`);

 let hacker2 = 'Joyce'
	console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
	console.log(`The longest name has ${hacker1.length} characters`)
} else {
	console.log(`The longest name has ${hacker2.length} characters`)
}
   
// Iteration 3: Loops

let hacker1Upper = ""
let hacker2Upper = ""

for (let i = 0; i < hacker1.length; i += 1 ) {
    hacker1Upper += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Upper)

for (let i = hacker2.length - 1; i >= 0; i -= 1) {
  hacker2Upper += hacker2[i];
}
console.log(hacker2Upper)

let comp = hacker1.localeCompare(hacker2)
  if (comp === -1) {
    console.log(`The driver's ${hacker1} goes first`)
} else if (comp === 1) {
    console.log('Yo, the navigator goes first definitely')
} else {
    console.log('What?! You both have the same name?')
}



